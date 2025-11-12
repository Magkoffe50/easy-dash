'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ROUTES } from '@/shared/config/routes';
import { useAuthSelectors } from '@/shared/store/auth/hooks';

export const useAppRouteGuard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAppReady, isAuthenticated } = useAuthSelectors();

  useEffect(() => {
    if (!isAppReady) {
      return;
    }

    const currentRoute = Object.values(ROUTES).find(
      (route) => route.path === pathname,
    );

    if (currentRoute) {
      if (currentRoute.requiresAuth && !isAuthenticated) {
        router.push(ROUTES.HOME.path);
        return;
      }

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
