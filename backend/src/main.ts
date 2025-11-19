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

  // Set global prefix to 'api' for both staging and production
  // This ensures consistent API routes: /api/auth/*, /api/users/*, etc.
  // Can be overridden with API_PREFIX env var if needed (e.g., API_PREFIX="" to disable)
  const apiPrefix = process.env.API_PREFIX || 'api';
  app.setGlobalPrefix(apiPrefix);

  // const uploadsPath = path.join(process.cwd(), 'uploads');
  // app.useStaticAssets(uploadsPath, {
  //   prefix: '/uploads',
  // });

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
  // Swagger path: if apiPrefix is set, it will be at /{apiPrefix}/docs, otherwise at /docs
  const swaggerPath = apiPrefix ? 'docs' : 'api';
  SwaggerModule.setup(swaggerPath, app, document);

  const port = process.env.PORT || 3001;

  await app.listen(port);
  const basePath = apiPrefix ? `/${apiPrefix}` : '';
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(
    `Swagger documentation: http://localhost:${port}${basePath}/docs`,
  );
}
void bootstrap();
