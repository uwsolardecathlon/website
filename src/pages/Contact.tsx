import { useState, useEffect } from 'react';

import H1 from '../components/text/H1.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';
import Form from '../components/Form';

import { Section } from '../types/types.ts';
import sanityClient from '../client.tsx';

const Contact = () => {
  const [header, setHeader] = useState<Section>();

  useEffect(() => {
    const query = `*[_type=='contact'][0]`;

    const getData = async () => {
      const { header } = await sanityClient.fetch(query);
      setHeader(header);
    };

    getData();
  }, []);

  return (
    <section className='flex max-md:flex-col justify-between gap-12 md:gap-16 lg:gap-24 container my-24 md:my-32'>
      {header ? (
        <div className='text-center md:text-left flex flex-col gap-4'>
          <H1>{header.heading}</H1>
          <Subtitle1 className='max-md:mx-auto max-w-md lg:max-w-[400px]'>
            {header.body}
          </Subtitle1>
        </div>
      ) : (
        // Prevent layout shift
        <div className='h-screen'></div>
      )}
      <Form className='flex-1' />
    </section>
  );
};

export default Contact;
