import { twMerge } from 'tailwind-merge';

import H3 from './text/H3';

export interface TeamDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  commitment: string;
  responsibilities: Responsibility[];
  additionalInfo?: React.ReactNode;
}

interface Responsibility {
  name: string;
  description: string;
}

const TeamDescription = ({
  name,
  description,
  commitment,
  responsibilities,
  additionalInfo,
  className,
  ...rest
}: TeamDescriptionProps) => {
  return (
    <section
      className={twMerge('flex justify-between gap-24', className)}
      {...rest}
    >
      <H3 className='text-xl md:text-3xl basis-1/4 shrink-0 grow-0'>{name}</H3>
      <div className='flex flex-col gap-4'>
        <p>{description}</p>
        <p>Time Commitment: {commitment}</p>
        <div>
          <p>Responsibilities:</p>
          <ul className='list-disc pl-5'>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>
                <strong>{responsibility.name}:</strong>{' '}
                {responsibility.description}
              </li>
            ))}
          </ul>
        </div>
        {additionalInfo}
      </div>
    </section>
  );
};

export default TeamDescription;
