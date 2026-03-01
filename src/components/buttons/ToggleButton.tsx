'use client';

import LockCloseIcon from '@assets/icons/lock-close.svg';
import LockOpenIcon from '@assets/icons/lock-open.svg';
import { cn } from '@/lib/cn';

type ToggleButtonProps = {
  isOn: boolean;
  onChange: () => void;
  className?: string;
};

export default function ToggleButton({ isOn, onChange, className }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cn(
        'relative h-32pxr w-68pxr rounded-full border border-ui-200 bg-ui-100 px-6pxr transition-colors duration-200',
        { 
          'bg-primary border-transparent': isOn,
        },
        className,
      )}
    >
      <div className="flex h-full items-center gap-x-12pxr">
      </div>
      <div
        className={cn(
          'absolute top-1/2 h-28pxr w-30pxr -translate-y-1/2 rounded-full border border-ui-200 bg-ui-bg transition-[left] duration-200 ease-out',
          { 
            'left-2pxr': !isOn,
            'left-34pxr': isOn 
          },
        )}
      />
    </button>
  );
}
