'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Sidebar, Header } from '@/widgets';
import {
  useAuthSelectors,
  useAuthOrchestration,
} from '@/shared/store/auth/hooks';
import { MUI_SM_BREAKPOINT } from '@/shared/config';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setOpen] = useState(false);
  const { isAuthenticated, user } = useAuthSelectors();
  const { onLogoutRequest } = useAuthOrchestration();

  const handleMenuToggle = useCallback(() => {
    setOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  useEffect(() => {
    if (window.innerWidth > MUI_SM_BREAKPOINT) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleSetClose = (event: WindowEventMap['resize']) => {
      const width = (event?.target as Window).innerWidth;

      if (width <= MUI_SM_BREAKPOINT) {
        setOpen(false);
      } else if (width > MUI_SM_BREAKPOINT && !isSidebarOpen) {
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleSetClose);
    return () => {
      window.removeEventListener('resize', handleSetClose);
    };
  }, [isSidebarOpen]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      <Header user={user} onMenuToggle={handleMenuToggle} />

      {isAuthenticated && (
        <Sidebar
          isOpen={isSidebarOpen}
          onMenuToggle={handleMenuToggle}
          isAuthenticated={isAuthenticated}
          user={user || undefined}
          onLogout={onLogoutRequest}
        />
      )}
      <Box
        component="main"
        sx={{
          paddingTop: { xs: '56px', sm: 0 },
          flex: 1,
          width: isAuthenticated ? 'auto' : '100%',
          overflow: 'auto',
          minHeight: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
