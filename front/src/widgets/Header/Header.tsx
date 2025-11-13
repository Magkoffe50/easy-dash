'use client';

import React, { useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import {
  AccountCircle,
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
  user?: User;
  onLogout?: () => void;
  onLogin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  user,
  onLogout,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { themeMode, toggleTheme } = useTheme();

  const handleMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl],
  );

  const handleClose = useCallback(() => setAnchorEl(null), []);

  return (
    <AppBar position="sticky" sx={{ height: 64 }}>
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

          {user ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                {user.avatar ? (
                  <Avatar src={user.avatar} alt={user.name} />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <MuiLink
                    component={Link}
                    href={ROUTES.PROFILE.path}
                    underline="none"
                    color="inherit"
                  >
                    Profile
                  </MuiLink>
                </MenuItem>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Link href={ROUTES.LOGIN.path}>Sign In</Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
