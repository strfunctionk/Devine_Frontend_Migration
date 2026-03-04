'use client';

import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import Segment from './Segment';

type NavTabItem = {
  href: string;
  label: string;
};

type NavTabProps = {
  items: NavTabItem[];
  isActive?: (href: string) => boolean;
  onTabClick?: (href: string) => void;
  className?: string;
  itemClassName?: string;
};

export default function NavTab({ items, isActive, onTabClick, className, itemClassName }: NavTabProps) {
  const pathname = usePathname();
  const router = useRouter();
  const checkActive = isActive ?? ((href) => pathname?.endsWith(`/${href}`));

  return (
    <div className={cn('rounded-16pxr w-fit bg-surface-tab p-8pxr', className)}>
      <div className="flex flex-row gap-4pxr">
        {items.map(({ href, label }) => (
          <Segment
            key={href}
            label={label}
            isActive={checkActive(href)}
            className={itemClassName}
            onClick={() => {
              router.push(href);
              onTabClick?.(href);
            }}
          />
        ))}
      </div>
    </div>
  );
}
