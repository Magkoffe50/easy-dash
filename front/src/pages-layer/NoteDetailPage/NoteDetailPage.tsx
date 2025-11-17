'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useNotes } from '@/shared/store';
import { Note, NoteCreatePayload, NoteUpdatePayload } from '@/entities/note';
import { getNoteIcon } from '@/shared/lib/noteUtils';
import { formatLastUpdated } from '@/shared/lib/utils';
import { useDynamicRouteParams } from '@/shared/lib/useDynamicRouteParams';
import { Loader } from '@/shared/ui/Loader';
import { NoteEditor } from '@/features/notes/ui';

export const NoteDetailPage: React.FC = () => {
  const router = useRouter();
  const routeParams = useDynamicRouteParams();
  const noteId = routeParams.id;
  const { getNoteById, updateNote, deleteNote, isLoading } = useNotes();
  const [note, setNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadNote = useCallback(async () => {
    if (!noteId) return;
    const loadedNote = await getNoteById(noteId);
    if (loadedNote) {
      setNote(loadedNote);
    } else {
      router.push('/notes');
    }
  }, [noteId, getNoteById, router]);

  useEffect(() => {
    loadNote();
  }, []);

  const handleUpdate = async (data: NoteCreatePayload | NoteUpdatePayload) => {
    if (!note) return;

    const updated = await updateNote(note.id, data);
    if (updated) {
      setNote(updated);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (!note || !confirm('Are you sure you want to delete this note?')) {
      return;
    }

    setIsDeleting(true);
    const success = await deleteNote(note.id);
    setIsDeleting(false);

    if (success) {
      router.push('/notes');
    }
  };

  if (isLoading && !note) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Loader />
      </Container>
    );
  }

  if (!note) {
    return null;
  }

  if (isEditing) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => setIsEditing(false)}
            sx={{ mb: 2 }}
          >
            Back
          </Button>
          <Typography variant="h3" component="h1">
            Edit Note
          </Typography>
        </Box>

        <NoteEditor
          initialData={note}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
          isLoading={isLoading}
          submitLabel="Update Note"
        />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push('/notes')}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" component="h1">
            {note.title}
          </Typography>
          <Box>
            <IconButton
              onClick={() => setIsEditing(true)}
              color="primary"
              disabled={isDeleting}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              color="error"
              disabled={isDeleting}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            {getNoteIcon(note.type) && (
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                {getNoteIcon(note.type)}
              </Avatar>
            )}
            {note.type && (
              <Chip
                label={note.type}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
            <Box sx={{ ml: 'auto' }}>
              <Typography variant="caption" color="text.secondary">
                Updated {formatLastUpdated(note.lastUpdated)}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {note.description}
          </Typography>

          {note.content && (
            <>
              <Typography variant="h6" gutterBottom>
                Content
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {note.content}
              </Typography>
            </>
          )}

          {note.tags && note.tags.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {note.tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" />
                ))}
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};
