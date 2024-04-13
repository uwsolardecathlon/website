import { twMerge } from 'tailwind-merge';

const Subtitle1 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p className={twMerge('text-neutral-200 md:text-2xl text-lg', className)} {...rest}>
      {children}
    </p>
  );
};

export default Subtitle1;
