export function getApiPrefix(): string | undefined {
  const explicitPrefix = process.env.API_PREFIX;

  if (explicitPrefix === undefined || explicitPrefix === '') {
    return undefined;
  }

  return explicitPrefix;
}
