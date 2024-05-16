import { twMerge } from 'tailwind-merge';
import { PortableText } from '@portabletext/react';

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
    <div
      className={twMerge('flex flex-col gap-4 portable-text', className)}
      {...rest}
    >
      <PortableText value={description} />
      <p>Time Commitment: {commitment}</p>
      <div>
        <p>Responsibilities:</p>
        <PortableText value={responsibilities} />
      </div>
      {additionalInfo && <PortableText value={additionalInfo} />}
    </div>
  );
};

export default TeamDescription;
