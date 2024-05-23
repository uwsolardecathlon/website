import { twMerge } from 'tailwind-merge';
import { PortableText } from '@portabletext/react';
import { components } from '../utils/portableText';

export interface TeamDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  description: [];
  commitment: string;
  responsibilities: [];
  additionalInfo?: [];
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
      <PortableText value={description} components={components} />
      <p>Time Commitment: {commitment}</p>
      <div>
        <p>Responsibilities:</p>
        <PortableText value={responsibilities} components={components} />
      </div>
      {additionalInfo && (
        <PortableText value={additionalInfo} components={components} />
      )}
    </div>
  );
};

export default TeamDescription;
