import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';

const Join = () => {
  return (
    <div className='my-28'>
      <PageHeader
        title='Join Us'
        subtitle="Interested in joining? When you're ready,
        fill out the application linked below."
        imageSrc='/images/about_hero.png'
        imageAlt='altText'
      />

      <section className='flex flex-row gap-20 items-center container'>
        <div className='flex flex-col gap-7 w-2/5'>
          <H2>How do I join?</H2>
          <p>
            The University of Solar Decathlon is always looking for new members
            to join our team. Through interdisciplinary project management, we
            are looking to get all students into the clean energy workforce. If
            you are interested in participating, please click the Apply button
            below.
          </p>
          <div>
            <Button label='Apply' />
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default Join;
