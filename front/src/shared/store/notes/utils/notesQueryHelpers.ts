import { NotesQueryParams } from '../types';

export const buildNotesQueryString = (params?: NotesQueryParams): string => {
  if (!params) return '';

  const queryParts: string[] = [];

  if (params.search) {
    queryParts.push(`search=${encodeURIComponent(params.search)}`);
  }

  if (params.sort) {
    queryParts.push(`sort=${encodeURIComponent(params.sort)}`);
  }

  if (params.tag) {
    queryParts.push(`tag=${encodeURIComponent(params.tag)}`);
  }

  return queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
};
