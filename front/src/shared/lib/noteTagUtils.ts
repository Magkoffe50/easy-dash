const tagColors: Record<string, string> = {
  work: '#3b82f6',
  ideas: '#a855f7',
  marketing: '#10b981',
  personal: '#f59e0b',
};

export const getTagColor = (tag: string): string => {
  const normalizedTag = tag.toLowerCase().replace('#', '');
  return tagColors[normalizedTag] || tagColors.work;
};
