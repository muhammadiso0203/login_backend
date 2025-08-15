import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import config from './config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
    type: "postgres",
    url: config.DB_URL,
    synchronize: true,
    autoLoadEntities: true,
    entities: []
  }), LoginModule],
})
export class AppModule {}
