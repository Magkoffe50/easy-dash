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
}) => {
  return (
    <Box
      component="aside"
      sx={{
        width: isOpen ? 240 : 0,
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        borderRight: 1,
        borderColor: 'divider',
        minWidth: 0,
      }}
    >
      <Navigation isAuthenticated={isAuthenticated} onLogout={onLogout} />
    </Box>
  );
};
