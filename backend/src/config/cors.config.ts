import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const getCorsConfig = (): CorsOptions => {
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  const additionalOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map((url) => url.trim())
    : [];

  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    frontendUrl,
    ...additionalOrigins,
  ]
    .filter(Boolean)
    .filter((origin, index, self) => self.indexOf(origin) === index);

  return {
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
};
