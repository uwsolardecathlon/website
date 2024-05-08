interface TimelinePhaseProps {
  label: string;
  top: string;
  list: Array<string>;
  bottom: string;
  index: number;
}

function TimelinePhase({
  label,
  top,
  list,
  bottom,
  index,
}: TimelinePhaseProps) {
  return (
    <>
      <li className='flex flex-col gap-3 divide-y divide-solid divide-neutral-400 basis-1/3'>
        <h3 className='flex gap-2'>
          <span className='text-neutral-200'>0{index}.</span>
          {label}
        </h3>
        <div className='pt-3'>
          <p>{top}</p>
          <ul className='list-disc pl-5 mb-4'>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{bottom}</p>
        </div>
      </li>
    </>
  );
}

export default TimelinePhase;
