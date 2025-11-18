import { useState, useCallback } from 'react';
import { SortOption } from '@/shared/store';

export const useControlNoteList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('dateModified');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortAnchor, setSortAnchor] = useState<null | HTMLElement>(null);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchor(event.currentTarget);
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchor(event.currentTarget);
  };

  const handleCloseSort = () => {
    setSortAnchor(null);
  };

  const handleCloseFilter = () => {
    setFilterAnchor(null);
  };

  const handleSortSelect = useCallback((sort: SortOption) => {
    setSortOption(sort);
    handleCloseSort();
  }, []);

  const handleTagFilter = useCallback((tag: string | null) => {
    setSelectedTag(tag);
    handleCloseFilter();
  }, []);

  return {
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
  };
};
