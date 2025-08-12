'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { User } from '@/entities/user/model/types';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth-token');
    console.log('User logged out');
  }, []);

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
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
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsAuthenticated(true);
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
    }
  }, []);

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
