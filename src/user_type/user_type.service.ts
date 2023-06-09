import { Injectable } from '@nestjs/common';
import { CreateUserTypeInput } from './dto/create-user_type.input';
import { UpdateUserTypeInput } from './dto/update-user_type.input';

@Injectable()
export class UserTypeService {
  create(createUserTypeInput: CreateUserTypeInput) {
    return 'This action adds a new userType';
  }

  findAll() {
    return `This action returns all userType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userType`;
  }

  update(id: number, updateUserTypeInput: UpdateUserTypeInput) {
    return `This action updates a #${id} userType`;
  }

  remove(id: number) {
    return `This action removes a #${id} userType`;
  }
}
