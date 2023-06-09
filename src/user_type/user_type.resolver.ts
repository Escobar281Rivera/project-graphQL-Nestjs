import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserTypeService } from './user_type.service';
import { UserType } from './entities/user_type.entity';
import { CreateUserTypeInput } from './dto/create-user_type.input';
import { UpdateUserTypeInput } from './dto/update-user_type.input';

@Resolver(() => UserType)
export class UserTypeResolver {
  constructor(private readonly userTypeService: UserTypeService) {}

  @Mutation(() => UserType)
  createUserType(@Args('createUserTypeInput') createUserTypeInput: CreateUserTypeInput) {
    return this.userTypeService.create(createUserTypeInput);
  }

  @Query(() => [UserType], { name: 'userType' })
  findAll() {
    return this.userTypeService.findAll();
  }

  @Query(() => UserType, { name: 'userType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userTypeService.findOne(id);
  }

  @Mutation(() => UserType)
  updateUserType(@Args('updateUserTypeInput') updateUserTypeInput: UpdateUserTypeInput) {
    return this.userTypeService.update(updateUserTypeInput.id, updateUserTypeInput);
  }

  @Mutation(() => UserType)
  removeUserType(@Args('id', { type: () => Int }) id: number) {
    return this.userTypeService.remove(id);
  }
}
