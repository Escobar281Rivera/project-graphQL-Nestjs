import { Usuario } from '../entities/auth.entity';
import { CreateAuthInput } from './create-auth.input';
import { InputType, Field, Int, PartialType, ObjectType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput extends PartialType(CreateAuthInput) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateClaveApp{
  @Field(() => String)
  clave: string

  @Field(()=> Int)
  id: number
}

@ObjectType()
export class UpdateClaveAppResponse{
  @Field(() => Boolean)
  ok: boolean

  @Field(()=> String)
  message: string

  @Field(() => Usuario, { nullable: true})
  user: Usuario
}

