import H1 from '../components/text/H1.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';

import Contactform from '../components/Form';
const Contact = () => {
  return (
    <>
      <section className='flex flex-row justify-between mt-40'>
        <div className='flex flex-col gap-7'>
          <H1>Contact Us</H1>
          <Subtitle1 className='max-w-[27vw]'>
            Have any questions? Fill out the form, and we will get back to you
            as soon as possible.
          </Subtitle1>
        </div>
        <Contactform />
      </section>
    </>
  );
};

export default Contact;
