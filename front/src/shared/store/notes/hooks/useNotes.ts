import { useCallback } from 'react';
import { useNotesStore } from '../notesStore';
import { useUserStore } from '../../user/userStore';
import { api } from '@/shared/api';
import { Note, NoteCreatePayload, NoteUpdatePayload } from '@/entities/note';
import { useNotificationsStore } from '../../notifications/notificationsStore';

export const useNotes = () => {
  const notesStore = useNotesStore();
  const userId = useUserStore((state) => state.user?.id);
  const notifications = useNotificationsStore();

  const fetchNotes = useCallback(async () => {
    notesStore.setLoading(true);

    const [data, error] = await api.get<Note[]>(`/notes`);

    if (error) {
      notifications.addNotification({
        message: `Failed to fetch notes: ${error.message}`,
        severity: 'error',
      });
      notesStore.setLoading(false);
      return;
    }

    if (data) {
      notesStore.setNotes(data);
    }

    notesStore.setLoading(false);
  }, [notesStore, notifications]);

  const createNote = useCallback(
    async (payload: NoteCreatePayload): Promise<Note | null> => {
      if (!payload.title || !payload.description) {
        notifications.addNotification({
          message: 'Please fill in title and description',
          severity: 'error',
        });
        return null;
      }

      if (!userId) {
        notifications.addNotification({
          message: 'User not found',
          severity: 'error',
        });
        return null;
      }

      notesStore.setLoading(true);

      const [data, error] = await api.post<Note>(`/notes`, payload);

      notesStore.setLoading(false);

      if (error) {
        notifications.addNotification({
          message: `Failed to create note: ${error.message}`,
          severity: 'error',
        });
        return null;
      }

      if (data) {
        notesStore.addNote(data);
        notifications.addNotification({
          message: 'Note created successfully',
          severity: 'success',
        });
        return data;
      }

      return null;
    },
    [userId, notesStore, notifications],
  );

  const updateNote = useCallback(
    async (
      noteId: string,
      payload: NoteUpdatePayload,
    ): Promise<Note | null> => {
      if (!userId) {
        notifications.addNotification({
          message: 'User not found',
          severity: 'error',
        });
        return null;
      }

      notesStore.setLoading(true);

      const [data, error] = await api.patch<Note>(`/notes/${noteId}`, payload);

      notesStore.setLoading(false);

      if (error) {
        notifications.addNotification({
          message: `Failed to update note: ${error.message}`,
          severity: 'error',
        });
        return null;
      }

      if (data) {
        notesStore.updateNote(noteId, data);
        notifications.addNotification({
          message: 'Note updated successfully',
          severity: 'success',
        });
        return data;
      }

      return null;
    },
    [userId, notesStore, notifications],
  );

  const deleteNote = useCallback(
    async (noteId: string): Promise<boolean> => {
      if (!userId) {
        notifications.addNotification({
          message: 'User not found',
          severity: 'error',
        });
        return false;
      }

      notesStore.setLoading(true);

      const [, error] = await api.delete(`/notes/${noteId}`);

      notesStore.setLoading(false);

      if (error) {
        notifications.addNotification({
          message: `Failed to delete note: ${error.message}`,
          severity: 'error',
        });
        return false;
      }

      notesStore.removeNote(noteId);
      notifications.addNotification({
        message: 'Note deleted successfully',
        severity: 'success',
      });
      return true;
    },
    [userId, notesStore, notifications],
  );

  const getNoteById = useCallback(
    async (noteId: string): Promise<Note | null> => {
      notesStore.setLoading(true);

      const [data, error] = await api.get<Note>(`/notes/${noteId}`);

      notesStore.setLoading(false);

      if (error) {
        notifications.addNotification({
          message: `Failed to fetch note: ${error.message}`,
          severity: 'error',
        });
        return null;
      }

      return data;
    },
    [notesStore, notifications],
  );

  return {
    notes: notesStore.notes,
    isLoading: notesStore.isLoading,
    refetch: fetchNotes,
    createNote,
    updateNote,
    deleteNote,
    getNoteById,
  };
};
