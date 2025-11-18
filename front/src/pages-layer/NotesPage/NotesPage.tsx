'use client';

import React from 'react';
import { Container } from '@mui/material';
import { useNotes } from '@/shared/store';
import { Loader } from '@/shared/ui/Loader';
import { NotesPageHeader } from '@/widgets/NotesPageHeader';
import { NotesTable } from '@/widgets/NotesTable';
import { NotesSearchAndFilters } from '@/features/notes/ui/NotesSearchAndFilters';
import { NotesEmptyState } from '@/features/notes/ui/NotesEmptyState';
import { useControlNoteList } from './useControlNoteList';

export const NotesPage: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    sortOption,
    selectedTag,
    sortAnchor,
    filterAnchor,
    handleSortClick,
    handleFilterClick,
    handleCloseSort,
    handleCloseFilter,
    handleSortSelect,
    handleTagFilter,
  } = useControlNoteList();

  const { notes, isLoading, allTags } = useNotes({
    search: searchQuery || undefined,
    sort: sortOption,
    tag: selectedTag || undefined,
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <NotesPageHeader />

      <NotesSearchAndFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        allTags={allTags}
        sortAnchor={sortAnchor}
        filterAnchor={filterAnchor}
        onSortClick={handleSortClick}
        onFilterClick={handleFilterClick}
        onCloseSort={handleCloseSort}
        onCloseFilter={handleCloseFilter}
        onSortSelect={handleSortSelect}
        onTagFilter={handleTagFilter}
      />

      {isLoading ? (
        <Loader sx={{ py: 4 }} />
      ) : notes.length === 0 ? (
        <NotesEmptyState
          hasSearchOrFilter={Boolean(searchQuery || selectedTag)}
        />
      ) : (
        <NotesTable notes={notes} />
      )}
    </Container>
  );
};
