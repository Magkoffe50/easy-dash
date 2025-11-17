'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNotes } from '@/shared/store';
import { NoteCreatePayload } from '@/entities/note';
import { NoteEditor } from '@/features/notes/ui';

export const CreateNotePage: React.FC = () => {
  const router = useRouter();
  const { createNote, isLoading } = useNotes();

  const handleSubmit = useCallback(
    async (data: NoteCreatePayload) => {
      const createdNote = await createNote(data);

      if (createdNote) {
        router.push('/notes');
      }
    },
    [createNote, router],
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Typography variant="h3" component="h1">
          Create New Note
        </Typography>
      </Box>

      <NoteEditor
        onSubmit={handleSubmit}
        onCancel={() => router.back()}
        isLoading={isLoading}
        submitLabel="Create Note"
      />
    </Container>
  );
};
