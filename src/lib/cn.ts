import { type ClassValue, clsx } from 'clsx';
import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge';

const twMerge = createTailwindMerge(() => {
  const config = getDefaultConfig();
  return {
    ...config,
    classGroups: {
      ...config.classGroups,
      'custom-typography': [
        'text-display1',
        'text-title1',
        'text-title2',
        'text-title3',
        'text-heading1',
        'text-heading2',
        'text-headline1',
        'text-body1',
        'text-label1',
        'text-caption1',
      ],
    },
  };
});

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
