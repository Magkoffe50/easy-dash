export interface Note {
  id: string;
  title: string;
  description: string;
  content?: string;
  userId: string;
  lastUpdated: string;
  createdAt: string;
  type?: string;
  tags?: string[];
}

export interface NoteCreatePayload {
  title: string;
  description: string;
  content?: string;
  type?: string;
  tags?: string[];
}

export interface NoteUpdatePayload {
  title?: string;
  description?: string;
  content?: string;
  type?: string;
  tags?: string[];
}
