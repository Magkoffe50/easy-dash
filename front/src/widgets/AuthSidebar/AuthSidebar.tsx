'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Home, Search, Settings } from '@mui/icons-material';

export const AuthSidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 64,
        minWidth: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <IconButton
        sx={{
          mb: 2,
          width: 40,
          height: 40,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Home />
      </IconButton>
      <IconButton
        sx={{
          mb: 2,
          width: 40,
          height: 40,
          color: 'text.secondary',
        }}
      >
        <Search />
      </IconButton>
      <IconButton
        sx={{
          width: 40,
          height: 40,
          color: 'text.secondary',
        }}
      >
        <Settings />
      </IconButton>
    </Box>
  );
};
