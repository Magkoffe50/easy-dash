import { useCallback, useMemo, useEffect } from 'react';
import { useNotesStore } from '../notesStore';
import { useUserStore } from '../../user/userStore';
import { api } from '@/shared/api';
import { Note, NoteCreatePayload, NoteUpdatePayload } from '@/entities/note';
import useNotifications from '../../notifications/hooks/useNotifications';
import { buildNotesQueryString } from '../utils/notesQueryHelpers';
import type { SortOption, NotesQueryParams } from '../types';

export type { SortOption, NotesQueryParams };

export const useNotes = (queryParams?: NotesQueryParams) => {
  const notesStore = useNotesStore();
  const userId = useUserStore((state) => state.user?.id);
  const { showError, showSuccess } = useNotifications();

  const fetchNotes = useCallback(async () => {
    notesStore.setLoading(true);

    const queryString = buildNotesQueryString(queryParams);
    const [data, error] = await api.get<Note[]>(`/notes${queryString}`);

    if (error) {
      showError(`Failed to fetch notes: ${error.message}`);
      notesStore.setLoading(false);
      return;
    }

    if (data) {
      notesStore.setNotes(data);
    }

    notesStore.setLoading(false);
  }, [notesStore, showError, queryParams]);

  useEffect(() => {
    if (userId) {
      fetchNotes();
    }
  }, [userId]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    notesStore.notes.forEach((note) => {
      note.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [notesStore.notes]);

  const createNote = useCallback(
    async (payload: NoteCreatePayload): Promise<Note | null> => {
      if (!payload.title || !payload.description) {
        showError('Please fill in title and description');
        return null;
      }

      if (!userId) {
        showError('User not found');
        return null;
      }

      notesStore.setLoading(true);

      const [data, error] = await api.post<Note>(`/notes`, payload);

      notesStore.setLoading(false);

      if (error) {
        showError(`Failed to create note: ${error.message}`);
        return null;
      }

      if (data) {
        notesStore.addNote(data);
        showSuccess('Note created successfully');
        return data;
      }

      return null;
    },
    [userId, notesStore, showError, showSuccess],
  );

  const updateNote = useCallback(
    async (
      noteId: string,
      payload: NoteUpdatePayload,
    ): Promise<Note | null> => {
      if (!userId) {
        showError('User not found');
        return null;
      }

      notesStore.setLoading(true);

      const [data, error] = await api.patch<Note>(`/notes/${noteId}`, payload);

      notesStore.setLoading(false);

      if (error) {
        showError(`Failed to update note: ${error.message}`);
        return null;
      }

      if (data) {
        notesStore.updateNote(noteId, data);
        showSuccess('Note updated successfully');
        return data;
      }

      return null;
    },
    [userId, notesStore, showError, showSuccess],
  );

  const deleteNote = useCallback(
    async (noteId: string): Promise<boolean> => {
      if (!userId) {
        showError('User not found');
        return false;
      }

      notesStore.setLoading(true);

      const [, error] = await api.delete(`/notes/${noteId}`);

      notesStore.setLoading(false);

      if (error) {
        showError(`Failed to delete note: ${error.message}`);
        return false;
      }

      notesStore.removeNote(noteId);
      showSuccess('Note deleted successfully');
      return true;
    },
    [userId, notesStore, showError, showSuccess],
  );

  const getNoteById = useCallback(
    async (noteId: string): Promise<Note | null> => {
      notesStore.setLoading(true);

      const [data, error] = await api.get<Note>(`/notes/${noteId}`);

      notesStore.setLoading(false);

      if (error) {
        showError(`Failed to fetch note: ${error.message}`);
        return null;
      }

      return data;
    },
    [notesStore, showError],
  );

  return {
    notes: notesStore.notes,
    isLoading: notesStore.isLoading,
    allTags,
    refetch: fetchNotes,
    createNote,
    updateNote,
    deleteNote,
    getNoteById,
  };
};
