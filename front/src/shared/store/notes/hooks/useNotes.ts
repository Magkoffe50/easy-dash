import { useCallback } from 'react';
import { useNotesStore } from '../notesStore';
import { useUserStore } from '../../user/userStore';
import { api } from '@/shared/api';
import { Note, NoteCreatePayload } from '@/entities/note';
import { useNotificationsStore } from '../../notifications/notificationsStore';

export const useNotes = () => {
  const notesStore = useNotesStore();
  const userId = useUserStore((state) => state.user?.id);
  const notifications = useNotificationsStore();

  const fetchNotes = useCallback(async () => {
    if (!userId) {
      return;
    }

    notesStore.setLoading(true);

    const [data, error] = await api.get<Note[]>(`/users/${userId}/notes`);

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
  }, [userId, notesStore, notifications]);

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

      const [data, error] = await api.post<Note>(
        `/users/${userId}/notes`,
        payload,
      );

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

  // useEffect(() => {
  //   if (userId) {
  //     fetchNotes();
  //   }
  // }, [userId, fetchNotes]);

  return {
    notes: notesStore.notes,
    isLoading: notesStore.isLoading,
    refetch: fetchNotes,
    createNote,
  };
};
