import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Initialize Swagger documentation for the application
 * @param app - NestJS application instance
 * @param apiPrefix - API prefix (e.g., 'api') to determine Swagger path
 * @returns The Swagger documentation URL path
 */
export function initSwagger(app: INestApplication, apiPrefix: string): string {
  const config = new DocumentBuilder()
    .setTitle('Easy Dash API')
    .setDescription('The Easy Dash API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addTag('notes')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Swagger path: if apiPrefix is set, it will be at /{apiPrefix}/docs, otherwise at /docs
  const swaggerPath = apiPrefix ? 'docs' : 'api';
  SwaggerModule.setup(swaggerPath, app, document);

  const basePath = apiPrefix ? `/${apiPrefix}` : '';
  return `${basePath}/docs`;
}
