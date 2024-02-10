import { twMerge } from 'tailwind-merge';

const Subtitle1 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p className={twMerge('text-neutral-100 text-2xl', className)} {...rest}>
      {children}
    </p>
  );
};

export default Subtitle1;
