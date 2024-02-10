import { twMerge } from 'tailwind-merge';

const Subtitle2 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p className={twMerge('text-neutral-100 text-xl', className)} {...rest}>
      {children}
    </p>
  );
};

export default Subtitle2;
