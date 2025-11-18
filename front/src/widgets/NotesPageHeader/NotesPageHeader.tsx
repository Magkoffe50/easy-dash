'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export const NotesPageHeader: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        mb: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          All Notes
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage and organize your notes.
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="large"
        onClick={() => router.push('/notes/create')}
        startIcon={<AddIcon />}
      >
        New Note
      </Button>
    </Box>
  );
};
