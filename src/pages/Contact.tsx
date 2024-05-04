import H1 from '../components/text/H1.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';
import Form from '../components/Form';

const Contact = () => {
  return (
    <section className='flex max-md:flex-col justify-between gap-12 md:gap-16 lg:gap-24 container my-24 md:my-32'>
      <div className='text-center md:text-left flex flex-col gap-4'>
        <H1>Contact Us</H1>
        <Subtitle1 className='max-md:mx-auto max-w-md lg:max-w-[400px]'>
          Have any questions? Fill out the form, and we will get back to you as
          soon as possible.
        </Subtitle1>
      </div>
      <Form className='flex-1' />
    </section>
  );
};

export default Contact;
