'use client';

import { cn } from '@/lib/cn';

type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function PrimaryButton({ label, onClick, disabled, className }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-full py-14pxr rounded-12pxr text-heading2-md bg-primary text-white transition duration-150',
        {
          'opacity-60 cursor-not-allowed': disabled,
          'cursor-pointer hover:opacity-90 active:scale-x-98 active:scale-y-96': !disabled,
        },
        className,
      )}
    >
      {label}
    </button>
  );
}
