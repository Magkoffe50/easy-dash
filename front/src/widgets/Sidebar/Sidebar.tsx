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
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isAuthenticated,
  user,
  onLogout,
}) => (
  <Box
    component="aside"
    sx={(theme) => ({
      transition: 'width 0.3s ease',
      overflow: 'hidden',
      borderRight: '1px solid',
      borderColor: 'divider',
      minWidth: 0,
      position: { xs: 'fixed', md: 'relative' },
      top: { xs: `${theme.mixins.toolbar.minHeight}px`, md: 'auto' },
      left: { xs: 0, md: 'auto' },
      height: {
        xs: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        md: 'auto',
      },
      width: {
        xs: isOpen ? '100vw' : 0,
        md: isOpen ? 240 : 0,
      },
      zIndex: { xs: 1300, md: 'auto' },
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.grey[900]
          : theme.palette.grey[50],
    })}
  >
    <Navigation
      isAuthenticated={isAuthenticated}
      user={user}
      onLogout={onLogout}
    />
  </Box>
);
