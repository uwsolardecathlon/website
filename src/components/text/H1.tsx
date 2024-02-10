import { twMerge } from 'tailwind-merge';

const H1 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={twMerge('text-neutral-100 text-8xl font-bold', className)}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default H1;
