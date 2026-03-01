'use client';

import BookmarkColorIcon from '@assets/icons/bookmark-color.svg';
import BookmarkIcon from '@assets/icons/bookmark.svg';
import { cn } from '@/lib/cn';

type BookmarkButtonProps = {
  bookmarked: boolean;
  onBookmarkChange?: (next: boolean) => void;
  className?: string;
  iconClassName?: string;
  'aria-label'?: string;
};

export default function BookmarkButton({
  bookmarked,
  onBookmarkChange,
  className,
  iconClassName = 'h-32pxr w-32pxr',
  'aria-label': ariaLabel,
}: BookmarkButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={bookmarked}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.stopPropagation();
        onBookmarkChange?.(!bookmarked);
      }}
      className={cn(
        'group shrink-0 active:scale-95 transition focus-visible:outline-2 focus-visible:outline-ui-300 focus-visible:outline-offset-2',
        className,
      )}
    >
      <span className="grid">
        <BookmarkIcon
          aria-hidden
          className={cn(
            'col-start-1 row-start-1 transition duration-150',
            iconClassName,
            { 
              'opacity-0': bookmarked,
              'text-ui-200 group-hover:text-primary group-hover:scale-105': !bookmarked
            },
          )}
        />
        <BookmarkColorIcon
          aria-hidden
          className={cn(
            'col-start-1 row-start-1 transition duration-150 group-hover:scale-105',
            iconClassName,
            {
              'opacity-0 ': !bookmarked
            },
          )}
        />
      </span>
    </button>
  );
}
