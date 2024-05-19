import { PortableText } from '@portabletext/react';

import { components } from '../utils/portableText';

interface TimelinePhaseProps {
  heading: string;
  body: string | [];
  index: number;
}

function TimelinePhase({ heading, body, index }: TimelinePhaseProps) {
  return (
    <>
      <li className='flex flex-col gap-3 divide-y divide-solid divide-neutral-400 basis-1/3'>
        <h3 className='flex gap-2'>
          <span className='text-neutral-200'>0{index}.</span>
          {heading}
        </h3>
        <div className='pt-3'>
          <PortableText value={body as []} components={components} />
        </div>
      </li>
    </>
  );
}

export default TimelinePhase;
