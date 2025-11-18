'use client';

import React from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import {
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import { Input } from '@/shared/ui/Input';
import { SortOption } from '@/shared/store';

interface NotesSearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  allTags: string[];
  sortAnchor: HTMLElement | null;
  filterAnchor: HTMLElement | null;
  onSortClick: (event: React.MouseEvent<HTMLElement>) => void;
  onFilterClick: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseSort: () => void;
  onCloseFilter: () => void;
  onSortSelect: (sort: SortOption) => void;
  onTagFilter: (tag: string | null) => void;
}

export const NotesSearchAndFilters: React.FC<NotesSearchAndFiltersProps> = ({
  searchQuery,
  onSearchChange,
  allTags,
  sortAnchor,
  filterAnchor,
  onSortClick,
  onFilterClick,
  onCloseSort,
  onCloseFilter,
  onSortSelect,
  onTagFilter,
}) => {
  return (
    <Box
      sx={{
        mb: 3,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Input
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        startIcon={<SearchIcon />}
        fullWidth
        sx={{ maxWidth: 400 }}
      />
      <Button
        variant="outlined"
        endIcon={<ArrowDropDownIcon />}
        onClick={onSortClick}
      >
        Sort by
      </Button>
      <Menu
        anchorEl={sortAnchor}
        open={Boolean(sortAnchor)}
        onClose={onCloseSort}
        PaperProps={{ sx: { mt: 1 } }}
      >
        <MenuItem onClick={() => onSortSelect('dateModified')}>
          Date Modified
        </MenuItem>
        <MenuItem onClick={() => onSortSelect('dateCreated')}>
          Date Created
        </MenuItem>
        <MenuItem onClick={() => onSortSelect('titleAsc')}>Title A-Z</MenuItem>
        <MenuItem onClick={() => onSortSelect('titleDesc')}>Title Z-A</MenuItem>
      </Menu>
      <Button
        variant="outlined"
        endIcon={<ArrowDropDownIcon />}
        onClick={onFilterClick}
      >
        Filter by Tag
      </Button>
      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={onCloseFilter}
        PaperProps={{ sx: { mt: 1 } }}
      >
        <MenuItem onClick={() => onTagFilter(null)}>All Tags</MenuItem>
        {allTags.map((tag) => (
          <MenuItem key={tag} onClick={() => onTagFilter(tag)}>
            {tag}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
