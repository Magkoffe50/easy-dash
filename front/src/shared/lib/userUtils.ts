import { User } from '@/entities/user/model/types';

export const getUserDisplayName = (user: User | null | undefined): string => {
  if (!user) return '';

  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
  return fullName || user.name || '';
};

export const getUserInitials = (user: User | null | undefined): string => {
  if (!user) return '';

  const displayName = getUserDisplayName(user);
  if (!displayName) return '';

  const parts = displayName.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(
      0,
    )}`.toUpperCase();
  }

  return displayName.charAt(0).toUpperCase();
};

export const getAvatarInitial = (user: User | null | undefined): string => {
  if (!user) return '';

  const displayName = getUserDisplayName(user);
  return displayName ? displayName.charAt(0).toUpperCase() : '';
};
