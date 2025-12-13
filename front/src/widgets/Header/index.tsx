'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme } from '@/shared/ui/ThemeProvider';
import { APP_CONFIG, ROUTES } from '@/shared/config';
import { User } from '@/entities/user/model/types';
import Link from 'next/link';

interface HeaderProps {
  onMenuToggle?: () => void;
  user?: User | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, user }) => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{ height: 56, display: { xs: 'block', sm: 'none' } }}
    >
      <Toolbar>
        {user && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={user ? ROUTES.DASHBOARD.path : ROUTES.HOME.path}>
            {APP_CONFIG.name}
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 1 }}>
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
