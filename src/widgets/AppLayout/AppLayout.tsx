'use client';

import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { useAuth } from '@/shared/store';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isAuthenticated, user, login, logout, setUser } = useAuth();

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const handleLogout = useCallback(() => {
    logout();
    setUser(null);
    localStorage.removeItem('auth-token');
    console.log('User logged out');
  }, [logout, setUser]);

  const handleLogin = useCallback(() => {
    login('dummy-token');
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: undefined,
      role: 'user',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    localStorage.setItem('auth-token', 'dummy-token');
  }, [login, setUser]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        onMenuToggle={isAuthenticated ? handleSidebarToggle : undefined}
        user={user || undefined}
        onLogout={handleLogout}
        onLogin={handleLogin}
      />

      <Box sx={{ display: 'flex', flex: 1 }}>
        {isAuthenticated && (
          <Sidebar
            isOpen={isSidebarOpen}
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
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
