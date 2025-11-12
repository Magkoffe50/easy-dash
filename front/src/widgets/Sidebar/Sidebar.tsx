'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Navigation } from '@/widgets/Navigation';

interface SidebarProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isAuthenticated,
  onLogout,
}) => (
  <Box
    component="aside"
    sx={(theme) => ({
      transition: 'width 0.3s ease',
      overflow: 'hidden',
      // borderRight: { xs: 0, md: 1 },
      // borderColor: 'divider',
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
      backgroundColor: { xs: 'background.paper', md: 'transparent' },
    })}
  >
    <Navigation isAuthenticated={isAuthenticated} onLogout={onLogout} />
  </Box>
);
