import { Module } from '@nestjs/common';
import { UserTypeService } from './user_type.service';
import { UserTypeResolver } from './user_type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from './entities/user_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  providers: [UserTypeResolver, UserTypeService]
})
export class UserTypeModule {}
