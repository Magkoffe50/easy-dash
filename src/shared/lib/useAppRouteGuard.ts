'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ROUTES } from '@/shared/config/routes';
import { useAuth } from '@/shared/store';

export const useAppRouteGuard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAppReady, isAuthenticated } = useAuth();

  useEffect(() => {
    // Only make routing decisions after user is loaded
    if (!isAppReady) {
      return;
    }

    // Get the current route configuration
    const currentRoute = Object.values(ROUTES).find(
      (route) => route.path === pathname,
    );

    if (currentRoute) {
      // If route requires auth but user is not authenticated
      if (currentRoute.requiresAuth && !isAuthenticated) {
        router.push(ROUTES.HOME.path);
        return;
      }

      // If user is authenticated and trying to access auth pages
      if (
        isAuthenticated &&
        (pathname === ROUTES.LOGIN.path || pathname === ROUTES.REGISTER.path)
      ) {
        router.push(ROUTES.DASHBOARD.path);
        return;
      }
    }
  }, [isAppReady, isAuthenticated, pathname, router]);
};
