import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  // Support DATABASE_URL (Railway, Heroku, etc.) or individual variables
  const databaseUrl = configService.get<string>('DATABASE_URL');

  if (databaseUrl) {
    // Parse DATABASE_URL: postgresql://user:password@host:port/database
    const url = new URL(databaseUrl);
    return {
      type: 'postgres',
      host: url.hostname,
      port: parseInt(url.port, 10) || 5432,
      username: url.username,
      password: url.password,
      database: url.pathname.slice(1), // Remove leading '/'
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: configService.get('NODE_ENV') === 'development',
      logging: configService.get('NODE_ENV') === 'development',
      ssl:
        configService.get('NODE_ENV') === 'production'
          ? { rejectUnauthorized: false }
          : false,
    };
  }

  // Fallback to individual variables
  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: configService.get('NODE_ENV') === 'development',
    logging: configService.get('NODE_ENV') === 'development',
    ssl:
      configService.get('NODE_ENV') === 'production'
        ? { rejectUnauthorized: false }
        : false,
  };
};
