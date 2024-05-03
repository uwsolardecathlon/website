import { twMerge } from 'tailwind-merge';

const H1 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={twMerge('text-neutral-100 lg:text-8xl md:text-7xl text-5xl font-bold', className)}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default H1;
