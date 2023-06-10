import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule} from "@nestjs/graphql"
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeModule } from './user_type/user_type.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './auth/entities/auth.entity';
import { UserType } from './user_type/entities/user_type.entity';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      driver: ApolloDriver,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mysql",
        host: 'localhost',
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Usuario,UserType ],
        synchronize: true,
        options: { encrypt: false}
      })
    }),
    ConfigModule.forRoot(),
    UserTypeModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
