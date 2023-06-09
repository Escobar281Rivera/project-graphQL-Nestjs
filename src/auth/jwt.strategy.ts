import { PassportStrategy} from '@nestjs/passport'
import { ExtractJwt, Strategy} from 'passport-jwt'
import { AuthService} from './auth.service'
import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { JWTPayload, LoginUserDTO } from './dto/jwt.types'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        })
    }
     /**
   * It takes a JWT payload, validates it, and returns the user object if the token is valid
   * @param {JWTPayload} payload - JWTPayload - The payload of the JWT token.
   * @returns The user object is being returned.
   */
//   async validate(payload: JWTPayload): Promise<LoginUserDTO>{
//     const user = await this.authService.findUserByUsername()
//   }

}