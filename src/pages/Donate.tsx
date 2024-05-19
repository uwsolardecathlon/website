import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';

import { SectionWithImage, SectionWithImageAndButton } from '../types/types.ts';
import sanityClient from '../client.tsx';
import { getImg } from '../utils/getImg.ts';
import { components } from '../utils/portableText.tsx';

const Donate = () => {
  const [header, setHeader] = useState<SectionWithImage>();
  const [section, setSection] = useState<SectionWithImageAndButton>();

  useEffect(() => {
    const query = `*[_type=='donatePage'][0]`;

    const getData = async () => {
      const { header, section } = await sanityClient.fetch(query);

      setHeader(header);
      setSection(section);
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
      {section && (
        <section className='flex max-md:flex-col max-md:gap-12 items-start lg:items-center container'>
          <div className='md:w-1/2 md:pr-12 lg:pr-20 flex flex-col gap-4'>
            <H2>{section.heading}</H2>
            <PortableText value={section.body as []} components={components} />
            <Button label={section.btnText} className='mt-2' />
          </div>
          <img className='w-full md:w-1/2' src={getImg(section.img)} alt='' />
        </section>
      )}
    </div>
  );
};

export default Donate;
