import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

import H2 from '../components/text/H2.tsx';
import PageHeader from '../components/PageHeader.tsx';
import TimelinePhase from '../components/TimelinePhase.tsx';

import { Section, SectionWithImage } from '../types/types.ts';
import sanityClient from '../client.tsx';
import { getImg } from '../utils/getImg.ts';
import { components } from '../utils/portableText.tsx';

const Competition = () => {
  const [header, setHeader] = useState<SectionWithImage>();
  const [background, setBackground] = useState<SectionWithImage>();
  const [project, setProject] = useState<Section>();
  const [phases, setPhases] = useState<Section[]>([]);

  useEffect(() => {
    const query = `*[_type=='competition'][0]`;

    const getData = async () => {
      const { header, background, project, timeline } =
        await sanityClient.fetch(query);

      setHeader(header);
      setBackground(background);
      setProject(project);
      setPhases(Object.values(timeline));
    };

    getData();
  }, []);

  return (
    <div className='mt-24 mb-16 md:mt-32 md:mb-20'>
      {header ? (
        <PageHeader
          title={header.heading}
          subtitle={header.body as string}
          imageSrc={getImg(header.img)}
        />
      ) : (
        // Prevent layout shift
        <div className='h-screen'></div>
      )}
      {background && (
        <section className='flex max-md:flex-col max-md:gap-8 items-start lg:items-center container'>
          <div className='md:w-1/2 md:pr-12 lg:pr-20 flex flex-col gap-4'>
            <H2>{background.heading}</H2>
            <PortableText
              value={background.body as []}
              components={components}
            />
          </div>
          <img
            className='w-full md:w-1/2'
            src={getImg(background.img)}
            alt=''
          />
        </section>
      )}
      {project && (
        <div className='bg-secondary my-12 py-12 md:my-20 md:py-20'>
          <section className='flex max-md:flex-col max-md:gap-4 items-start container'>
            <H2 className='md:w-1/2 md:pr-12 lg:pr-20'>{project.heading}</H2>
            <div className='w-full md:w-1/2 flex flex-col gap-4'>
              <PortableText
                value={project.body as []}
                components={components}
              />
            </div>
          </section>
        </div>
      )}
      {phases.length > 0 && (
        <section className='flex flex-col gap-8 container'>
          <H2>Project Timeline</H2>
          <ul className='flex max-lg:flex-col justify-between gap-10 lg:gap-16'>
            {phases.map((phase, index) => (
              <TimelinePhase index={index + 1} key={index} {...phase} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Competition;
