import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: IconType;
  variant?: Variant;
  isLink?: boolean;
}

const Button = ({
  label,
  icon: Icon,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-5 py-2 rounded-full flex items-center gap-2',
        variant === 'primary'
          ? 'bg-primary text-white'
          : variant === 'secondary'
          ? 'text-neutral-100 border border-neutral-100'
          : 'text-neutral-100',
        className
      )}
      {...rest}
    >
      {Icon && <Icon aria-hidden='true' className='shrink-0' />}
      {label}
    </button>
  );
};

export default Button;
