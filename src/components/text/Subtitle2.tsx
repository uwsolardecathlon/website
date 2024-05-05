import { twMerge } from 'tailwind-merge';

const Subtitle2 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p
      className={twMerge('text-neutral-100 md:text-lg text-md', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Subtitle2;
