'use client';

import { useAuth } from '@/shared/store';
import { Box, CircularProgress } from '@mui/material';
import { useAppRouteGuard } from '@/shared/lib/useAppRouteGuard';
import { PropsWithChildren, useEffect, useRef } from 'react';

export const AppInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isAppReady, onCheckAuth } = useAuth();
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
