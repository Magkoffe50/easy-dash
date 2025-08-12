// Router utility for dynamic page loading

import { ROUTES, RouteConfig, getRouteByPath, getPublicRoutes, getProtectedRoutes } from '@/shared/config/routes';

export type RouteKey = keyof typeof ROUTES;

export const getRouteMetadata = (path: string): RouteConfig | undefined => {
  return getRouteByPath(path);
};


export const isProtectedRoute = (path: string): boolean => {
  const route = getRouteByPath(path);
  return route?.requiresAuth || false;
};

//  ---- Get routes ----
export const getAllRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES);
};

export const getPublicRoutesList = (): RouteConfig[] => {
  return getPublicRoutes();
};

export const getProtectedRoutesList = (): RouteConfig[] => {
  return getProtectedRoutes();
};
