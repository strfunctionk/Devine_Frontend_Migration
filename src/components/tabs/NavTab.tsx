'use client';

import { usePathname } from 'next/navigation';
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
  const checkActive = isActive ?? ((href) => pathname?.endsWith(`/${href}`));

  return (
    <nav aria-label="페이지 탭" className={cn('rounded-16pxr w-fit bg-surface-tab p-8pxr', className)}>
      <div className="flex flex-row gap-4pxr">
        {items.map(({ href, label }) => (
          <Segment
            key={href}
            label={label}
            href={href}
            isActive={checkActive(href)}
            className={itemClassName}
            onClick={() => onTabClick?.(href)}
          />
        ))}
      </div>
    </nav>
  );
}
