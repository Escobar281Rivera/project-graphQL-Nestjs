import { Field, ObjectType } from "@nestjs/graphql";
import {Usuario} from '../entities/auth.entity'

@ObjectType()
export class GetOneUser{
    @Field(() => Boolean)
    ok: boolean

    @Field(()=> String)
    message: string

    @Field(() => Usuario, { nullable: true})
    user: Usuario
}