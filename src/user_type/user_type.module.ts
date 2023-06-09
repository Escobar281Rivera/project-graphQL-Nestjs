import { Module } from '@nestjs/common';
import { UserTypeService } from './user_type.service';
import { UserTypeResolver } from './user_type.resolver';

@Module({
  providers: [UserTypeResolver, UserTypeService]
})
export class UserTypeModule {}
