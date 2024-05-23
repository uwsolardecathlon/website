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
  const [support, setSupport] = useState<SectionWithImageAndButton>();

  useEffect(() => {
    const query = `*[_type=='donate'][0]`;

    const getData = async () => {
      const { header, support } = await sanityClient.fetch(query);

      setHeader(header);
      setSupport(support);
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
      {support && (
        <section className='flex max-md:flex-col max-md:gap-12 items-start lg:items-center container'>
          <div className='md:w-1/2 md:pr-12 lg:pr-20 flex flex-col gap-4'>
            <H2>{support.heading}</H2>
            <PortableText value={support.body as []} components={components} />
            <Button
              label={support.btn.label}
              isLink
              href={support.btn.href}
              className='mt-2'
            />
          </div>
          <img className='w-full md:w-1/2' src={getImg(support.img)} alt='' />
        </section>
      )}
    </div>
  );
};

export default Donate;
