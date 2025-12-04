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
) => {
  const nodeEnv = configService.get<string>('NODE_ENV', 'development');
  return {
    type: 'postgres' as const,
    entities: [ENTITIES_PATH],
    synchronize: false,
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
    const commonOptions = getCommonTypeOrmOptions(configService, sslConfig);

    return {
      ...commonOptions,
      type: 'postgres' as const,
      host,
      port: parseInt(url.port, 10) || 5432,
      username: url.username,
      password: url.password,
      database: url.pathname.slice(1),
    } as TypeOrmModuleOptions;
  }

  const host = configService.get<string>('DB_HOST', 'localhost');
  const sslConfig = getSslConfig(configService, host);
  const commonOptions = getCommonTypeOrmOptions(configService, sslConfig);
  const portValue = configService.get<string>('DB_PORT');
  const port = portValue ? parseInt(portValue, 10) : 5432;
  const username = configService.get<string>('DB_USERNAME') || 'postgres';
  const password = configService.get<string>('DB_PASSWORD') || '';
  const database = configService.get<string>('DB_DATABASE') || '';

  return {
    ...commonOptions,
    type: 'postgres' as const,
    host,
    port,
    username,
    password,
    database,
  } as TypeOrmModuleOptions;
};
