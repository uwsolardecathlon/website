import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';

const Donate = () => {
  return (
    <div className='my-28'>
      <PageHeader
        title='Donate'
        subtitle='Your donations will help fund our events, research,
        and participation in the Solar Decathlon Competition.'
        imageSrc='/images/about_hero.png'
        imageAlt='altText'
      />
      <section className='lg:flex lg:mt-0 mt-10 block items-center container'>
        <div className='lg:w-1/2 lg:pr-20 flex flex-col gap-7'>
          <H2>Donate</H2>
          <p>
            We are extremely grateful to those who have supported our journey so
            far. We are looking to expand our focus and message to students and
            industry to provide a meaningful impact. If you are willing to
            support us on our journey, please click on the donation button
            below.
          </p>
          <div>
            <Button label='Donate'/>
          </div>
        </div>
        <img
          className='lg:w-1/2 w-full mt-10 h-auto align'
          src='/images/about_origin.png'
          alt='Image of Gould Hall (change later)'
        />
      </section>
    </div>
  );
};

export default Donate;
