import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity('Usuario')
export class Usuario {
 @Field(()=> Int)
 @PrimaryGeneratedColumn()
 id_usuario: number

 @Field(()=> Int,{ nullable: true})
 @Column({ type: 'int'})
 id_tipouser: number

 @Field(()=> String, {nullable: true})
 @Column({ type: 'varchar', nullable: true})
 nombre: string

 @Field(()=> String, { nullable: true})
 @Column({ type:'varchar', nullable: true})
 apellido: string

 @Field(()=> String, {nullable: true})
 @Column({ type: 'char', length: 15, nullable: true})
 usuario: string

 @Field(()=> String, { nullable: true})
 @Column({ type: 'varchar', nullable: true})
 clave: string

 @Field(()=> Date,{ nullable: true})
 @Column('datetimeoffset',{ precision: 3, default: () => 'CURRENT_TIMESTAMP', nullable: true})
 fecha_Creacion: Date

 @Field(() => Boolean)
 @Column({ type: 'bit', nullable: true})
 activo: boolean

 @Field(()=> String, {nullable: true})
 @Column({ type: 'varchar', nullable: true})
 correo: string

 @Field(()=> String)
 @Column({ type: 'varchar', nullable: true})
 usuario_movil: string

 @Field(()=> String, { nullable: true})
 @Column({ type: 'varchar', nullable: true})
 id_dispositivo: string

 @Field(()=> String,{ nullable: true})
 @Column({type:'varchar', nullable:true})
 recibir_notificaciones: string

 @Field(()=> String, { nullable: true})
 @Column({type: 'varchar', nullable: true})
 claveApp: string

 @Field(()=> Boolean, { nullable: true})
 @Column({type: 'bit',default: true, nullable: true})
 estadoClaveApp: boolean
}
