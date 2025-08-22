'use client';

import { useAuth } from '@/shared/store';
import { Box, CircularProgress } from '@mui/material';
import { useAppRouteGuard } from '@/shared/lib/useAppRouteGuard';
import { PropsWithChildren, useEffect, useRef } from 'react';
import useNotifications from '@/shared/store/hooks/useNotifications';
import ToastNotificaiton from '../ToastNotification';

export const AppInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isAppReady, onCheckAuth } = useAuth();
  const { error } = useNotifications();
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
      {error && (
        <ToastNotificaiton
          openInitial={true}
          notification={<span>{error}</span>}
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
