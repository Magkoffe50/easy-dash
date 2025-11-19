import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import { getCorsConfig } from './config/cors.config';
import { NestExpressApplication } from '@nestjs/platform-express';

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  dotenv.config({ path: path.resolve(__dirname, envFile) });

  // const nodeEnv = process.env.NODE_ENV || 'development';

  // const uploadsPath = path.join(process.cwd(), 'uploads');
  // app.useStaticAssets(uploadsPath, {
  //   prefix: '/uploads',
  // });

  app.setGlobalPrefix('api');

  app.enableCors(getCorsConfig());

  app.use(cookieParser());

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Easy Dash API')
    .setDescription('The Easy Dash API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // Swagger at /api/docs to avoid conflict with API routes
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3001;

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation: http://localhost:${port}/api/docs`);
}
void bootstrap();
