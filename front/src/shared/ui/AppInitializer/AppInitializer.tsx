'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import {
  useAuthSelectors,
  useAuthOrchestration,
} from '@/shared/store/auth/hooks';
import { useNotifications } from '@/shared/store/notifications/hooks';
import { useAppRouteGuard } from '@/shared/lib/useAppRouteGuard';
import { Loader } from '@/shared/ui';
import { ToastNotificationStack } from '../ToastNotification';

export const AppInitializer: FC<PropsWithChildren> = ({ children }) => {
  const hasCheckedAuth = useRef(false);

  const { isLoading, isAppReady } = useAuthSelectors();
  const { onCheckAuth } = useAuthOrchestration();
  const { notifications, removeNotification } = useNotifications();
  useAppRouteGuard();

  useEffect(() => {
    if (!isAppReady && !hasCheckedAuth.current) {
      hasCheckedAuth.current = true;
      onCheckAuth();
    }
  }, [isAppReady, onCheckAuth]);

  return (
    <>
      {notifications.length > 0 && (
        <ToastNotificationStack
          notifications={notifications}
          onClose={removeNotification}
        />
      )}
      {(!isAppReady || isLoading) && <Loader fullScreen />}
      {isAppReady && !isLoading && children}
    </>
  );
};
