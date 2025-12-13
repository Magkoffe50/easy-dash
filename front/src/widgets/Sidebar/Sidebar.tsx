'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Navigation } from '@/widgets/Navigation';
import { User } from '@/entities/user/model/types';

interface SidebarProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  user?: User;
  onLogout: () => void;
  onMenuToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isAuthenticated,
  user,
  onLogout,
  onMenuToggle,
}) => (
  <Box
    component="aside"
    sx={(theme) => ({
      transition: 'width 0.3s ease',
      overflow: 'hidden',
      borderRight: '1px solid',
      borderColor: 'divider',
      minWidth: 0,
      position: { xs: 'fixed', sm: 'relative' },
      top: { xs: `${theme.mixins.toolbar.minHeight}px`, sm: 'auto' },
      left: { xs: 0, sm: 'auto' },
      height: {
        xs: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        sm: 'auto',
      },
      width: {
        xs: isOpen ? '100vw' : 0,
        sm: isOpen ? 240 : 0,
      },
      zIndex: { xs: 1300, sm: 'auto' },
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.grey[900]
          : theme.palette.grey[50],
    })}
  >
    <Navigation
      isAuthenticated={isAuthenticated}
      onMenuToggle={onMenuToggle}
      user={user}
      onLogout={onLogout}
    />
  </Box>
);
