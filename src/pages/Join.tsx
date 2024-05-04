import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';
import Accordion from '../components/Accordion.tsx';
import { faq } from '../data/faq.tsx';

const Join = () => {
  return (
    <div className='mt-24 mb-16 md:mt-32 md:mb-20'>
      <PageHeader
        title='Join Us'
        subtitle="Interested in joining? When you're ready,
        fill out the application linked below."
        imageSrc='/images/about_hero.png'
        imageAlt=''
      />

      <div className='flex flex-col sm:flex-row gap-12 lg:gap-28 container'>
        <section className='flex flex-col gap-7 sm:w-1/2'>
          <H2>How do I join?</H2>
          <p>
            The University of Solar Decathlon is always looking for new members
            to join our team. Through interdisciplinary project management, we
            are looking to get all students into the clean energy workforce. If
            you are interested in participating, please click the Apply button
            below.
          </p>
          <div>
            <Button
              label='Apply'
              isLink
              href='https://docs.google.com/forms/d/e/1FAIpQLSeiq1ESdIdI-FjZdShg6LqCIMN0xCSeSiRpsVBt9bDwFWOJ6w/viewform'
            />
          </div>
        </section>
        <section className='flex flex-col gap-2 sm:w-3/5'>
          <H2>FAQ</H2>
          <Accordion panels={faq} />
        </section>
      </div>
    </div>
  );
};

export default Join;
