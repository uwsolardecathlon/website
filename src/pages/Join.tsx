import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';
import Accordion from '../components/Accordion.tsx';
import { AccordionPanelProps } from '../components/AccordionPanel.tsx';

import { SectionWithImage, SectionWithImageAndButton } from '../types/types.ts';
import sanityClient from '../client.tsx';
import { getImg } from '../utils/getImg.ts';
import { components } from '../utils/portableText.tsx';

type FAQItem = {
  question: string;
  answer: [];
};

const Join = () => {
  const [header, setHeader] = useState<SectionWithImage>();
  const [apply, setApply] = useState<SectionWithImageAndButton>();
  const [faq, setFaq] = useState<AccordionPanelProps[]>();

  useEffect(() => {
    const query = `*[_type=='join'][0]`;

    const getData = async () => {
      const { header, apply, faq } = await sanityClient.fetch(query);

      setHeader(header);
      setApply(apply);
      setFaq(
        faq.map((item: FAQItem) => {
          return {
            title: item.question,
            content: (
              <PortableText value={item.answer} components={components} />
            ),
          };
        })
      );
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
      <div className='flex flex-col sm:flex-row gap-12 lg:gap-28 container'>
        {apply && (
          <section className='flex flex-col gap-4 sm:w-1/2'>
            <H2>{apply.heading}</H2>
            <PortableText value={apply.body as []} components={components} />
            <div>
              <Button label={apply.btn.label} isLink href={apply.btn.href} />
            </div>
          </section>
        )}
        {faq && (
          <section className='flex flex-col gap-2 sm:w-3/5'>
            <H2>FAQ</H2>
            <Accordion panels={faq} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Join;
