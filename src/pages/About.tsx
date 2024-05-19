import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

import H2 from '../components/text/H2.tsx';
import PageHeader from '../components/PageHeader.tsx';

import { SectionWithImage } from '../types/types.ts';
import sanityClient from '../client.tsx';
import { getImg } from '../utils/getImg.ts';
import { components } from '../utils/portableText.tsx';

const About = () => {
  const [header, setHeader] = useState<SectionWithImage>();
  const [section1, setSection1] = useState<SectionWithImage>();
  const [section2, setSection2] = useState<SectionWithImage>();

  useEffect(() => {
    const query = `*[_type=='aboutPage'][0]`;

    const getData = async () => {
      const { header, section1, section2 } = await sanityClient.fetch(query);
      setHeader(header);
      setSection1(section1);
      setSection2(section2);
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
      {section1 && (
        <section className='flex max-md:flex-col max-md:gap-8 items-start lg:items-center container'>
          <div className='md:w-1/2 md:pr-12 lg:pr-20 flex flex-col gap-4'>
            <H2>{section1.heading}</H2>
            <div className='flex flex-col gap-4'>
              <PortableText
                value={section1.body as []}
                components={components}
              />
            </div>
          </div>
          <img className='w-full md:w-1/2' src={getImg(section1.img)} alt='' />
        </section>
      )}
      {section2 && (
        <section className='flex max-md:flex-col max-md:gap-8 mt-12 md:mt-20 items-start lg:items-center container'>
          <div className='md:w-1/2 md:pl-12 lg:pl-20 flex flex-col gap-4'>
            <H2>{section2.heading}</H2>
            <div className='flex flex-col gap-4'>
              <PortableText
                value={section2.body as []}
                components={components}
              />
            </div>
          </div>
          <img
            className='w-full md:w-1/2 md:order-first'
            src={getImg(section2.img)}
            alt=''
          />
        </section>
      )}
    </div>
  );
};

export default About;
