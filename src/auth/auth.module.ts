import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/auth.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([Usuario]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions:{
        expiresIn: '24h',
      }
    })
  ],
  providers: [AuthResolver, AuthService,JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
