import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import { getCorsConfig } from './config/cors.config';
import { initSwagger } from './config/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const apiPrefix = process.env.API_PREFIX || 'api';
  const port = process.env.PORT || 3001;

  dotenv.config({ path: path.resolve(__dirname, envFile) });

  // Set global prefix to 'api' for both staging and production
  // This ensures consistent API routes: /api/auth/*, /api/users/*, etc.
  // Can be overridden with API_PREFIX env var if needed (e.g., API_PREFIX="" to disable)

  // const uploadsPath = path.join(process.cwd(), 'uploads');
  // app.useStaticAssets(uploadsPath, {
  //   prefix: '/uploads',
  // });
  // app.setGlobalPrefix(apiPrefix);
  app.enableCors(getCorsConfig());
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerPath = initSwagger(app, apiPrefix);

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation: http://localhost:${port}${swaggerPath}`);
}
void bootstrap();
