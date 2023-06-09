import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
