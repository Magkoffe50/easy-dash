'use client';

import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { useAuthSelectors, useAuthOrchestration } from '@/shared/store/auth/hooks';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isAuthenticated, user } = useAuthSelectors();
  const { onLogoutRequest } = useAuthOrchestration();

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        onMenuToggle={isAuthenticated ? handleSidebarToggle : undefined}
        user={user || undefined}
        onLogout={onLogoutRequest}
      />

      <Box sx={{ display: 'flex', flex: 1 }}>
        {isAuthenticated && (
          <Sidebar
            isOpen={isSidebarOpen}
            isAuthenticated={isAuthenticated}
            onLogout={onLogoutRequest}
          />
        )}

        <Box
          component="main"
          sx={{
            flex: 1,
            p: isAuthenticated ? 3 : 0,
            width: isAuthenticated ? 'auto' : '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
