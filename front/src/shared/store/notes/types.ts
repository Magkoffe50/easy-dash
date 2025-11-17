import { Note } from '@/entities/note';

export interface NotesState {
  notes: Note[];
  isLoading: boolean;
}

export interface NotesActions {
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  updateNote: (noteId: string, updates: Partial<Note>) => void;
  removeNote: (noteId: string) => void;
  setLoading: (isLoading: boolean) => void;
  clearNotes: () => void;
}

export type NotesStore = NotesState & NotesActions;
