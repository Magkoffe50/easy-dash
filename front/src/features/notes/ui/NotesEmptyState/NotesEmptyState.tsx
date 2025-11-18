'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface NotesEmptyStateProps {
  hasSearchOrFilter: boolean;
}

export const NotesEmptyState: React.FC<NotesEmptyStateProps> = ({
  hasSearchOrFilter,
}) => {
  const router = useRouter();

  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {hasSearchOrFilter ? 'No notes found' : 'No notes yet'}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {hasSearchOrFilter
          ? 'Try adjusting your search or filter'
          : 'Create your first note to get started'}
      </Typography>
      {!hasSearchOrFilter && (
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('/notes/create')}
          startIcon={<AddIcon />}
        >
          Create Your First Note
        </Button>
      )}
    </Box>
  );
};
