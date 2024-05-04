import { twMerge } from 'tailwind-merge';

import H3 from './text/H3';
import TeamDescription, { TeamDescriptionProps } from './TeamDescription';

export interface TeamSectionProps extends TeamDescriptionProps {
  name: string;
}

const TeamSection = ({
  name,
  description,
  commitment,
  responsibilities,
  additionalInfo,
  className,
  ...rest
}: TeamSectionProps) => {
  return (
    <section
      className={twMerge('flex justify-between gap-24', className)}
      {...rest}
    >
      <H3 className='text-xl md:text-3xl basis-1/4 shrink-0 grow-0'>{name}</H3>
      <TeamDescription
        description={description}
        commitment={commitment}
        responsibilities={responsibilities}
        additionalInfo={additionalInfo}
      />
    </section>
  );
};

export default TeamSection;
