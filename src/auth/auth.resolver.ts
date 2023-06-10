import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Usuario } from './entities/auth.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput, UpdateClaveApp, UpdateClaveAppResponse } from './dto/update-auth.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt.decorator';
import { GetOneUser } from './dto/get-user.types';
import { Login, LoginResponse } from 'src/user_type/dto/login-dto';

@Resolver(() => Usuario)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [Usuario], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => GetOneUser, { name: 'user' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Query(() => LoginResponse, {name: 'auth'})
  async login(@Args('body', {type: () => Login }) body: Login){
    return await this.authService.login(body.username, body.clave)
  }
  @Mutation(() => UpdateClaveAppResponse, { name: "updateClave" })
  @UseGuards(JwtAuthGuard)
  async updateClave(
    @Args("data", { type: () => UpdateClaveApp }) body: UpdateClaveApp
  ) {
    return await this.authService.updateClave(body.id, body.clave);
  }
}
