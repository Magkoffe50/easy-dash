import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as path from 'path';
import { RemoveDescriptionFromNotes1735689600000 } from './1735689600000-RemoveDescriptionFromNotes';

const nodeEnv = process.env.NODE_ENV || 'development';
const envFile =
  nodeEnv === 'production' ? '.env.production' : '.env.development';

const envFilePath = path.resolve(__dirname, '../../', envFile);
try {
  config({ path: envFilePath });
} catch {
  console.warn(
    `Could not load env file from ${envFilePath}, using environment variables`,
  );
}

const configService = new ConfigService();

const LOCAL_DOCKER_HOSTS = ['postgres', 'localhost', '127.0.0.1'];

const isLocalDockerHost = (host: string): boolean => {
  return LOCAL_DOCKER_HOSTS.includes(host);
};

const getSslConfig = (host: string): boolean | object => {
  const explicitSslSetting = configService.get<string>('DB_SSL');

  if (explicitSslSetting !== undefined) {
    return explicitSslSetting === 'true' || explicitSslSetting === '1'
      ? { rejectUnauthorized: false }
      : false;
  }

  const isLocal = isLocalDockerHost(host);
  const isProduction = nodeEnv === 'production';

  return !isLocal && isProduction ? { rejectUnauthorized: false } : false;
};

const databaseUrl = configService.get<string>('DATABASE_URL');
let host: string;
let port: number;
let username: string;
let password: string;
let database: string;

if (databaseUrl) {
  const url = new URL(databaseUrl);
  host = url.hostname;
  port = parseInt(url.port, 10) || 5432;
  username = url.username;
  password = url.password;
  database = url.pathname.slice(1);
} else {
  host = configService.get<string>('DB_HOST', 'localhost');
  const portValue = configService.get<string>('DB_PORT');
  port = portValue ? parseInt(portValue, 10) : 5432;
  username = configService.get<string>('DB_USERNAME') || 'postgres';
  password = configService.get<string>('DB_PASSWORD') || '';
  database = configService.get<string>('DB_DATABASE') || '';
}

const sslConfig = getSslConfig(host);

export default new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  ssl: sslConfig,
  entities: [path.resolve(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [RemoveDescriptionFromNotes1735689600000],
  synchronize: false,
});
