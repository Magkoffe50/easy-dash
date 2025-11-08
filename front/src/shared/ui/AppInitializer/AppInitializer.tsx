'use client';

import {
  useAuthSelectors,
  useAuthOrchestration,
} from '@/shared/store/auth/hooks';
import { useNotifications } from '@/shared/store/notifications/hooks';
import { Box, CircularProgress } from '@mui/material';
import { useAppRouteGuard } from '@/shared/lib/useAppRouteGuard';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { ToastNotificationStack } from '../ToastNotification';

export const AppInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isAppReady } = useAuthSelectors();
  const { onCheckAuth } = useAuthOrchestration();
  const { notifications, removeNotification } = useNotifications();
  const hasCheckedAuth = useRef(false);
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
      {(!isAppReady || isLoading) && (
        <Box
          sx={{ background: 'rgba(0,0,0,0.2)' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100vh"
        >
          <CircularProgress size={80} />
        </Box>
      )}
      {isAppReady && !isLoading && children}
    </>
  );
};
