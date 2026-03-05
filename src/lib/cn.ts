import { type ClassValue, clsx } from 'clsx';
import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge';

const twMerge = createTailwindMerge(() => {
  const config = getDefaultConfig();
  return {
    ...config,
    classGroups: {
      ...config.classGroups,
      'custom-typography': [
        'text-display1', 'text-display1-md', 'text-display1-sb', 'text-display1-bd',
        'text-title1',   'text-title1-md',   'text-title1-sb',   'text-title1-bd',
        'text-title2',   'text-title2-md',   'text-title2-sb',   'text-title2-bd',
        'text-title3',   'text-title3-md',   'text-title3-sb',   'text-title3-bd',
        'text-heading1', 'text-heading1-md', 'text-heading1-sb', 'text-heading1-bd',
        'text-heading2', 'text-heading2-md', 'text-heading2-sb', 'text-heading2-bd',
        'text-heading4', 'text-heading4-md', 'text-heading4-sb', 'text-heading4-bd',
        'text-headline1','text-headline1-md','text-headline1-sb','text-headline1-bd',
        'text-body1',    'text-body1-md',    'text-body1-sb',    'text-body1-bd',
        'text-body2',    'text-body2-md',    'text-body2-sb',    'text-body2-bd',
        'text-label1',   'text-label1-md',   'text-label1-sb',   'text-label1-bd',
        'text-caption1', 'text-caption1-md', 'text-caption1-sb', 'text-caption1-bd',
      ],
    },
  };
});

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
