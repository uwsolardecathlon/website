import H1 from '../components/text/H1.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';

import Form from '../components/Form';
const Contact = () => {
  return (
    <>
      {/* Desktop */}
      <section className='lg:flex hidden flex-row justify-between my-28 container'>
        <div className='flex flex-col gap-7'>
          <H1>Contact Us</H1>
          <Subtitle1 className='max-w-[27vw]'>
            Have any questions? Fill out the form, and we will get back to you
            as soon as possible.
          </Subtitle1>
        </div>
        <Form />
      </section>

      {/* Mobile */}
      <section className='lg:hidden flex flex-col gap-12 my-16 container'>
        <div className='flex flex-col items-center gap-7'>
          <H1>Contact Us</H1>
          <Subtitle1 className='max-w-[75vw] text-center'>
            Have any questions? Fill out the form, and we will get back to you
            as soon as possible.
          </Subtitle1>
        </div>
        <Form />
      </section>
    </>
  );
};

export default Contact;
