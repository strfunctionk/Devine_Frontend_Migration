import Link from 'next/link';
import { cn } from '@/lib/cn';

type ProjectRegisterButtonProps = {
  label: string;
  href: string;
  className?: string;
};

const ProjectRegisterButton = ({ label, href, className }: ProjectRegisterButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'px-12pxr py-8pxr rounded-8pxr text-label1 bg-primary text-white transition duration-150 cursor-pointer hover:opacity-90 active:scale-x-98 active:scale-y-96 hover:bg-white hover:text-primary',
        className,
      )}
    >
      {label}
    </Link>
  );
};

export default ProjectRegisterButton;
