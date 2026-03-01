'use client';

import { cn } from '@/lib/cn';

type ProjectRegisterButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function ProjectRegisterButton({ label, onClick, disabled, className }: ProjectRegisterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'px-12pxr py-8pxr rounded-8pxr text-label1 bg-primary text-white transition duration-150',
        {
          'opacity-60 cursor-not-allowed': disabled,
          'cursor-pointer hover:opacity-90 active:scale-x-98 active:scale-y-96 hover:bg-white hover:text-primary': !disabled,
        },
        className,
      )}
    >
      {label}
    </button>
  );
}
