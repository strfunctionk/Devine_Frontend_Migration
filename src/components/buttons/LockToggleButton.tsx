'use client';

import LockCloseIcon from '@assets/icons/lock-close.svg';
import LockOpenIcon from '@assets/icons/lock-open.svg';
import { cn } from '@/lib/cn';

type LockToggleButtonProps = {
  isOn: boolean;
  onChange: () => void;
  className?: string;
  "aria-label"?: string;
};

export default function LockToggleButton({ isOn, onChange, className, "aria-label": ariaLabel }: LockToggleButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isOn}
      aria-label={ariaLabel}
      onClick={onChange}
      className={cn(
        'relative h-28pxr w-56pxr rounded-full border border-ui-200 bg-ui-100 px-6pxr transition-colors duration-200',
        { 
          'bg-primary border-transparent': isOn,
        },
        className,
      )}
    >
      <div className="flex h-full items-center gap-x-12pxr">
        <LockOpenIcon aria-hidden className="w-16pxr h-16pxr text-ui-50" />
        <LockCloseIcon aria-hidden
          className={cn(
            'w-16pxr h-16pxr transition-colors duration-200',
            {
              'text-ui-50': isOn,
              'text-ui-300': !isOn
            },
          )}
        />
      </div>
      <div
        className={cn(
          'absolute top-1/2 h-24pxr w-26pxr -translate-y-1/2 rounded-full border border-ui-200 bg-ui-bg transition-[left] duration-200 ease-out',
          { 
            'left-2pxr': !isOn,
            'left-26pxr': isOn 
          },
        )}
      />
    </button>
  );
}
