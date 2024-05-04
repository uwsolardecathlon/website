import H1 from '../components/text/H1.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';
import Form from '../components/Form';

const Contact = () => {
  return (
    <section className='lg:flex flex-row justify-between my-28 container'>
      <div className='lg:text-left flex flex-col gap-7 text-center self-start'>
        <H1>Contact Us</H1>
        <Subtitle1 className='lg:max-w-[27vw] mb-10'>
          Have any questions? Fill out the form, and we will get back to you
          as soon as possible.
        </Subtitle1>
      </div>
      <Form/>
    </section>
  );
};

export default Contact;
