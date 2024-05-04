import Button from '../components/Button.tsx';
import H2 from '../components/text/H2';
import PageHeader from '../components/PageHeader.tsx';
import Accordion from '../components/Accordion.tsx';

const faq = [
  {
    title: 'Do I need any experience to join the UW Solar Decathlon?',
    content:
      "No! As long as you're willing to learn, we will help you develop the skills required to contribute to our projects.",
  },
  {
    title: 'What is the time commitment?',
    content:
      'The estimated time commitment varies by team. Visit the Team page for more details.',
  },
  {
    title: 'What will I gain by joining the club?',
    content:
      'We actively train members in technical skills such as designing, energy modeling, embodied carbon modeling, and financial modeling. By providing this support, we hope to give all members hands-on experience with tackling problems that affect the world. We also actively interact with industry professionals, which can provide opportunities for internships, scholarships and more.',
  },
  {
    title: 'What kind of work can I do for the club?',
    content:
      'In addition to our competition team, we are looking for members to expand the club through education, outreach, finance and more. If you let us know your goals, we will do our best to accommodate you.',
  },
  {
    title: 'How can I learn about upcoming opportunities?',
    content:
      "Once you apply to the club, you will be added to our club's Slack where we send announcements about events, opportunities for research, and more. Join if you're at all interested!",
  },
];

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

      <div className='flex flex-col sm:flex-row gap-12 lg:gap-28 lg:mt-0 mt-10 container'>
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
