import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Login API')
    .setDescription('Foydalanuvchi login ro‘yxati va CRUD amallari')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `🚀 Server ishga tushdi: http://localhost:${process.env.PORT ?? 3000}`,
  );
  console.log(
    `📄 Swagger hujjatlari: http://localhost:${process.env.PORT ?? 3000}/api/docs`,
  );
}

bootstrap();
