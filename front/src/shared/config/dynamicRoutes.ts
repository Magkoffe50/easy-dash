export interface DynamicRouteConfig {
  pattern: string;
  componentName: string;
  paramName?: string;
}

export const DYNAMIC_ROUTES: DynamicRouteConfig[] = [
  {
    pattern: '/notes/:id',
    componentName: 'NoteDetailPage',
    paramName: 'id',
  },
];

export const matchDynamicRoute = (
  path: string,
  slug: string[],
): { config: DynamicRouteConfig; params: Record<string, string> } | null => {
  for (const route of DYNAMIC_ROUTES) {
    const patternParts = route.pattern.split('/').filter(Boolean);
    const pathParts = slug;

    if (patternParts.length !== pathParts.length) {
      continue;
    }

    const params: Record<string, string> = {};
    let matches = true;

    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathPart = pathParts[i];

      if (patternPart.startsWith(':')) {
        const paramName = patternPart.slice(1);
        params[paramName] = pathPart;
      } else if (patternPart !== pathPart) {
        matches = false;
        break;
      }
    }

    if (matches) {
      return { config: route, params };
    }
  }

  return null;
};
