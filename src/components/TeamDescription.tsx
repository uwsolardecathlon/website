import { twMerge } from 'tailwind-merge';

export interface TeamDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
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
  description,
  commitment,
  responsibilities,
  additionalInfo,
  className,
  ...rest
}: TeamDescriptionProps) => {
  return (
    <div className={twMerge('flex flex-col gap-4', className)} {...rest}>
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
  );
};

export default TeamDescription;
