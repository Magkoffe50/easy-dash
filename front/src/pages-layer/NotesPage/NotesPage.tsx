'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNotes } from '@/shared/store';
import { RecentDashboardCard } from '@/features/dashboard/ui';
import { getNoteIcon } from '@/shared/lib/noteUtils';
import { Loader } from '@/shared/ui/Loader';

export const NotesPage: React.FC = () => {
  const router = useRouter();
  const { notes, isLoading } = useNotes();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h1">
          All Notes
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('/notes/create')}
          startIcon={<AddIcon />}
        >
          Create New Note
        </Button>
      </Box>

      {isLoading ? (
        <Loader sx={{ py: 4 }} />
      ) : notes.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No notes yet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Create your first note to get started
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push('/notes/create')}
            startIcon={<AddIcon />}
          >
            Create Your First Note
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid size={{ xs: 12, md: 4 }} key={note.id}>
              <RecentDashboardCard note={note} icon={getNoteIcon(note.type)} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
