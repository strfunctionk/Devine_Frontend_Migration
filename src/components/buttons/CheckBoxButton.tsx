'use client';

import CheckboxCheckedIcon from '@assets/icons/checkbox-checked.svg';
import CheckboxUncheckedIcon from '@assets/icons/checkbox-unchecked.svg';
import { cn } from '@/lib/cn';

type CheckBoxButtonProps = {
  checked: boolean;
  onChange?: (next: boolean) => void;
  className?: string;
  'aria-label'?: string;
};

export default function CheckBoxButton({
  checked,
  onChange,
  className,
  'aria-label': ariaLabel,
}: CheckBoxButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      aria-label={ariaLabel}
      onClick={() => onChange?.(!checked)}
      className={cn('shrink-0 cursor-pointer w-28pxr h-28pxr', className)}
    >
      {checked ? (
        <CheckboxCheckedIcon aria-hidden className="w-full h-full" />
      ) : (
        <CheckboxUncheckedIcon aria-hidden className="w-full h-full" />
      )}
    </button>
  );
}
