import React from 'react';

// Common utility functions

export const classNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Hook to prevent hydration mismatch by ensuring consistent state between server and client
 * @param initialState The initial state to use during SSR
 * @param clientState The state to use after hydration
 * @returns The appropriate state based on whether the component is mounted
 */
export const useHydrationSafeState = <T>(
  initialState: T,
  clientState: T,
): T => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? clientState : initialState;
};

/**
 * Hook to safely access browser APIs without causing hydration mismatches
 * @param getValue Function that returns the value from browser API
 * @param defaultValue Default value to use during SSR
 * @returns The value from browser API or default value
 */
export const useBrowserValue = <T>(getValue: () => T, defaultValue: T): T => {
  const [value, setValue] = React.useState<T>(defaultValue);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setValue(getValue());
  }, [getValue]);

  return mounted ? value : defaultValue;
};
