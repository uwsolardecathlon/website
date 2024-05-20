import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

import PageHeader from '../components/PageHeader.tsx';
import H2 from '../components/text/H2.tsx';
import TeamSection, { TeamSectionProps } from '../components/TeamSection.tsx';
import Accordion from '../components/Accordion.tsx';
import TeamDescription from '../components/TeamDescription.tsx';

import { Section, SectionWithImage } from '../types/types.ts';
import sanityClient from '../client.tsx';
import { getImg } from '../utils/getImg.ts';
import { components } from '../utils/portableText.tsx';

const Team = () => {
  const [header, setHeader] = useState<SectionWithImage>();
  const [overview, setOverview] = useState<Section>();
  const [subteams, setSubteams] = useState([]);
  const [relatedGroups, setRelatedGroups] = useState([]);

  useEffect(() => {
    const query = `*[_type=='team'][0]`;

    const getData = async () => {
      const { header, overview, subteams, relatedGroups } =
        await sanityClient.fetch(query);

      setHeader(header);
      setOverview(overview);
      setSubteams(subteams);
      setRelatedGroups(relatedGroups);
    };

    getData();
  }, []);

  return (
    <div className='mt-24 mb-16 md:mt-32 md:mb-20'>
      {header && (
        <PageHeader
          title={header.heading}
          subtitle={header.body as string}
          imageSrc={getImg(header.img)}
        />
      )}
      {overview && (
        <section className='container flex flex-col gap-4'>
          <H2>{overview.heading}</H2>
          <div className='flex flex-col gap-4'>
            <PortableText value={overview.body as []} components={components} />
          </div>
        </section>
      )}
      {subteams.length > 0 && (
        <section className='container flex flex-col gap-2 md:gap-8 py-12'>
          <H2>Subteams</H2>
          <div className='max-md:hidden flex flex-col gap-8'>
            {subteams.map((team: TeamSectionProps, index) => (
              <TeamSection
                className='[&:not(:last-child)]:pb-8 [&:not(:last-child)]:border-b border-neutral-400'
                key={index}
                {...team}
              />
            ))}
          </div>
          <Accordion
            panels={subteams.map((team: TeamSectionProps, index) => ({
              title: team.name,
              content: (
                <TeamDescription
                  className='[&:not(:last-child)]:pb-8 [&:not(:last-child)]:border-b border-neutral-400'
                  key={index}
                  {...team}
                />
              ),
            }))}
            className='md:hidden'
          />
        </section>
      )}
      {relatedGroups.length > 0 && (
        <section className='container flex flex-col gap-2 md:gap-8'>
          <H2>Related Groups</H2>
          <div className='max-md:hidden flex flex-col gap-12'>
            {relatedGroups.map((team: TeamSectionProps, index) => (
              <TeamSection
                className='[&:not(:last-child)]:pb-8 [&:not(:last-child)]:border-b border-neutral-400'
                key={index}
                {...team}
              />
            ))}
          </div>
          <Accordion
            panels={relatedGroups.map((team: TeamSectionProps, index) => ({
              title: team.name,
              content: (
                <TeamDescription
                  className='[&:not(:last-child)]:pb-8 [&:not(:last-child)]:border-b border-neutral-400'
                  key={index}
                  {...team}
                />
              ),
            }))}
            className='md:hidden'
          />
        </section>
      )}
    </div>
  );
};

export default Team;
