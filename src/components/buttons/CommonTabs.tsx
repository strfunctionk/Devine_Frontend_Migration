'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type TabItem<T extends string> = {
  value: T;
  label: ReactNode;
};

type CommonTabsProps<T extends string> = {
  value: T;
  onChange: (v: T) => void;
  items: TabItem<T>[];
  className?: string;
  itemClassName?: string;
};

export default function CommonTabs<T extends string>({
  value,
  onChange,
  items,
  className,
  itemClassName,
}: CommonTabsProps<T>) {
  return (
    <div className={cn('flex gap-x-8pxr', className)}>
      {items.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => onChange(t.value)}
            className={cn(
              'cursor-pointer rounded-full border-2 px-24pxr py-12pxr text-headline1 transition',
              {
                'bg-my-tab-active text-tab-bg-active': active,
                'border-my-tab-border bg-my-tab-inactive text-my-tab-text': !active,
              },
              itemClassName,
            )}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
