import {Field, InputType, Int, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class JWTPayload {

    @Field(()=> String)
    usuario: string

    @Field(() => Int)
    id_usuario: number

    @Field(() => Int)
    id_tipouser: number
}

@InputType()
export class LoginUserDTO {
    @Field(() => String)
    usuario: string
    
    @Field(()=> String)
    claveApp: string
}