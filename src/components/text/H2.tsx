import { twMerge } from 'tailwind-merge';

const H2 = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={twMerge('text-neutral-100 text-5xl font-bold', className)}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default H2;
