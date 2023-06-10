import { Field, InputType, ObjectType} from '@nestjs/graphql'
import {Usuario} from 'src/auth/entities/auth.entity'

@InputType()
export class Login {
    @Field(() => String)
    username: string

    @Field(() => String)
    clave: string
}

@ObjectType()
export class LoginResponse{
    @Field(() => Boolean)
    ok: boolean

    @Field(() => String)
    message: string

    @Field(() => Usuario,{ nullable: true})
    user: Usuario

    @Field(() => String, {nullable: true})
    accessToken:string

}