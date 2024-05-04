import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';

const Donate = () => {
  return (
    <div className='mt-24 mb-16 md:mt-32 md:mb-20'>
      <PageHeader
        title='Donate'
        subtitle='Your donations will help fund our events, research,
        and participation in the Solar Decathlon Competition.'
        imageSrc='/images/about_hero.png'
        imageAlt=''
        className='max-w-none sm:max-w-[560px]'
      />
      <section className='flex max-md:flex-col max-md:gap-12 items-start lg:items-center container'>
        <div className='md:w-1/2 md:pr-12 lg:pr-20 flex flex-col gap-4'>
          <H2>Support Us</H2>
          <p>
            We are extremely grateful to those who have supported our journey so
            far. We are looking to expand our focus and message to students and
            industry to provide a meaningful impact. If you are willing to
            support us on our journey, please click on the donation button
            below.
          </p>
          <Button label='Donate' className='mt-2' />
        </div>
        <img
          className='w-full md:w-1/2'
          src='/images/about_origin.png'
          alt=''
        />
      </section>
    </div>
  );
};

export default Donate;
