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
          : variant === 'tertiary'
          ? 'text-white border-2 border-metallic-gold'
          : 'text-neutral-100',
        className
      )}
      {...rest}
    >
      {label}
      {Icon && <Icon aria-hidden='true' className='shrink-0' />}
    </button>
  );
};

export default Button;
