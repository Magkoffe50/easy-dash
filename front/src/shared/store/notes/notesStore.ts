import { create } from 'zustand';
import { Note } from '@/entities/note';
import { NotesStore } from './types';

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],
  isLoading: false,

  setNotes: (notes: Note[]) => {
    set({ notes });
  },

  addNote: (note: Note) => {
    set((state) => ({
      notes: [note, ...state.notes],
    }));
  },

  updateNote: (noteId: string, updates: Partial<Note>) => {
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === noteId
          ? { ...note, ...updates, lastUpdated: new Date().toISOString() }
          : note,
      ),
    }));
  },

  removeNote: (noteId: string) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== noteId),
    }));
  },

  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  clearNotes: () => {
    set({ notes: [] });
  },
}));
