import { CreateUserTypeInput } from './create-user_type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserTypeInput extends PartialType(CreateUserTypeInput) {
  @Field(() => Int)
  id: number;
}
