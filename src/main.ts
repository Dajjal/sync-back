import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import 'dotenv/config';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log('------------------------------------------------------');
  Logger.log(`Сервер старнанул по адресу http://localhost:${port}`,
    'Приложение');
}

bootstrap();
