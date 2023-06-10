import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from 'src/user_type/dto/login-dto';
import { checkPassword, hashPassword } from 'src/utils/bcrypt';
import { JWTPayload, LoginUserDTO } from './dto/jwt.types';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private _user: Repository<Usuario>,
    private readonly _jwtService: JwtService,
  ) {}

  async findAll() {
    const users = await this._user.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this._user.findOne({
      where: { id_usuario: id },
      select: { claveApp: false },
    });

    if (user) {
      delete user.claveApp;
      delete user.clave;
      return {
        ok: true,
        message: 'Usuario encontrado',
        user,
      };
    } else {
      return {
        ok: false,
        message: 'Usuario no encontrado',
        user: undefined,
      };
    }
  }
  async login(username: string, clave: string): Promise<LoginResponse> {
    const user = await this._user.findOne({ where: { usuario: username } });

    if (user) {
      const { accessToken } = this._createToken(user);
      if (user.estadoClaveApp) {
        if (await checkPassword(clave, user.claveApp)) {
          return {
            accessToken,
            user,
            ok: true,
            message: 'Usuario correcto',
          };
        } else {
          return {
            accessToken: undefined,
            ok: false,
            user: undefined,
            message: 'usuario o contraseña invalida',
          };
        }
      } else {
        if (clave === '1234') {
          return {
            ok: true,
            user,
            accessToken,
            message: 'Configure su contraseña',
          };
        } else {
          return {
            accessToken: undefined,
            ok: false,
            user: undefined,
            message: 'Contraseña invalida',
          };
        }
      }
    } else {
      return {
        accessToken: undefined,
        ok: false,
        user: undefined,
        message: 'Usuario no encontrado',
      };
    }
  }
  async updateClave(id: number, clave: string) {
    const user = await this._user.findOne({ where: { id_usuario: id } });
    if (!user) {
      return {
        ok: false,
        message: 'Usuario no encontrado',
        user: undefined,
      };
    }
    user.claveApp = await hashPassword(clave);
    user.estadoClaveApp = true;
    try {
      const result = await this._user.save(user);
      return {
        ok: true,
        message: 'Se actualizo la clave correctamente',
        user: result,
      };
    } catch (e) {
      return {
        ok: false,
        message: 'Error al actualizar la clave',
        user: undefined,
      };
    }
  }

  async findUserByUsername(username: string): Promise<LoginUserDTO> {
    const user = await this._user.findOne({ where: { usuario: username } });
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
  private _createToken({
    usuario,
    id_usuario,
    id_tipouser,
  }: Usuario): { accessToken: string } {
    const user: JWTPayload = { usuario, id_usuario, id_tipouser };
    const accessToken = this._jwtService.sign(
      { user },
      { secret: process.env.SECRET_KEY, expiresIn: "10d" }
    );
    return {
      accessToken,
    };
  }
}
