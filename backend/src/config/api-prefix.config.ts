export function getApiPrefix(): string {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const explicitPrefix = process.env.API_PREFIX;

  if (explicitPrefix !== undefined) {
    return explicitPrefix;
  }

  const isProduction = nodeEnv === 'production';
  return isProduction ? 'api' : '';
}
