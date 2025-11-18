'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Sidebar } from '@/widgets/Sidebar';
import {
  useAuthSelectors,
  useAuthOrchestration,
} from '@/shared/store/auth/hooks';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen] = useState(true);
  const { isAuthenticated, user } = useAuthSelectors();
  const { onLogoutRequest } = useAuthOrchestration();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      {isAuthenticated && (
        <Sidebar
          isOpen={isSidebarOpen}
          isAuthenticated={isAuthenticated}
          user={user || undefined}
          onLogout={onLogoutRequest}
        />
      )}

      <Box
        component="main"
        sx={{
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
