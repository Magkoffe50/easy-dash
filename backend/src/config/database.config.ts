import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

const LOCAL_DOCKER_HOSTS = ['postgres', 'localhost', '127.0.0.1'];
const ENTITIES_PATH = __dirname + '/../**/*.entity{.ts,.js}';

const isLocalDockerHost = (host: string): boolean => {
  return LOCAL_DOCKER_HOSTS.includes(host);
};

const getSslConfig = (
  configService: ConfigService,
  host: string,
): boolean | object => {
  const explicitSslSetting = configService.get<string>('DB_SSL');

  if (explicitSslSetting !== undefined) {
    return explicitSslSetting === 'true' || explicitSslSetting === '1'
      ? { rejectUnauthorized: false }
      : false;
  }

  const isLocal = isLocalDockerHost(host);
  const nodeEnv = configService.get<string>('NODE_ENV', 'development');
  const isProduction = nodeEnv === 'production';

  return !isLocal && isProduction ? { rejectUnauthorized: false } : false;
};

const getCommonTypeOrmOptions = (
  configService: ConfigService,
  ssl: boolean | object,
): Partial<TypeOrmModuleOptions> => {
  const nodeEnv = configService.get<string>('NODE_ENV', 'development');
  return {
    type: 'postgres',
    entities: [ENTITIES_PATH],
    synchronize: nodeEnv !== 'production',
    logging: nodeEnv === 'development',
    ssl,
  };
};

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const databaseUrl = configService.get<string>('DATABASE_URL');

  if (databaseUrl) {
    const url = new URL(databaseUrl);
    const host = url.hostname;
    const sslConfig = getSslConfig(configService, host);

    return {
      ...getCommonTypeOrmOptions(configService, sslConfig),
      host,
      port: parseInt(url.port, 10) || 5432,
      username: url.username,
      password: url.password,
      database: url.pathname.slice(1),
    } as TypeOrmModuleOptions;
  }

  const host = configService.get<string>('DB_HOST', 'localhost');
  const sslConfig = getSslConfig(configService, host);
  const port = configService.get<number>('DB_PORT', 5432);
  const username = configService.get<string>('DB_USERNAME', 'postgres');
  const password = configService.get<string>('DB_PASSWORD', '');
  const database = configService.get<string>('DB_DATABASE', '');

  return {
    ...getCommonTypeOrmOptions(configService, sslConfig),
    host,
    port,
    username,
    password,
    database,
  } as TypeOrmModuleOptions;
};
