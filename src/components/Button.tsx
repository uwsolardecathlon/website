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
        'px-5 py-2 rounded-full flex items-center gap-2 transition duration-300 ease-in-out group',
        variant === 'primary'
          ? 'bg-primary text-white hover:bg-primary-dark'
          : variant === 'secondary'
          ? 'text-neutral-100 border border-neutral-300 hover:border-neutral-200 hover:bg-neutral-500'
          : 'text-neutral-100',
        className
      )}
      {...rest}
    >
      {label}
      {Icon && (
        <Icon
          aria-hidden='true'
          className='shrink-0 transition duration-300 ease-in-out group-hover:translate-x-1.5'
        />
      )}
    </button>
  );
};

export default Button;
