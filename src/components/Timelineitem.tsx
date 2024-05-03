import { twJoin, twMerge } from 'tailwind-merge';

interface TLProps extends React.HTMLAttributes<HTMLLIElement>{
  label: string;
  content: any;
  number: string;
}

function TLItem(TLProp: TLProps) {
  const { label = 'N/A', content = 'N/A', number = 'N/A', className = ''} = TLProp;

  return (
    <>
      {/* Desktop */}
      <li className={twMerge('hidden lg:flex flex-col gap-3 divide-y divide-solid divide-neutral-400 max-w-[22vw]', className)}>
        <p className='flex flex-row gap-4'>
          <span className='text-neutral-300'>0{number}.</span>
          Phase {number}: {label}
        </p>
        {content}
      </li>

      {/* Mobile */}
      <li className={
        twMerge('flex lg:hidden flex-col gap-3 py-7 max-w-[80vw] border-b-solid border-b-2 border-b-neutral-400', className)
      }>
        <p className='flex flex-row gap-4'>
          <div className='text-neutral-300'>0{number}.</div>
          Phase {number}: {label}
        </p>
        {content}
      </li>
    </>
  );
}

export default TLItem;
