import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import { getCorsConfig } from './config/cors.config';
import { initSwagger } from './config/swagger.config';
import { getApiPrefix } from './config/api-prefix.config';
import { NestExpressApplication } from '@nestjs/platform-express';

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

async function bootstrap() {
  dotenv.config({ path: path.resolve(__dirname, envFile) });

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3001;

  // const uploadsPath = path.join(process.cwd(), 'uploads');
  // app.useStaticAssets(uploadsPath, {
  //   prefix: '/uploads',
  // });

  const apiPrefix = getApiPrefix();

  if (apiPrefix) {
    app.setGlobalPrefix(apiPrefix);
  }
  app.enableCors(getCorsConfig());
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerPath = initSwagger(app, apiPrefix || 'api');

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation: http://localhost:${port}${swaggerPath}`);
}
void bootstrap();
