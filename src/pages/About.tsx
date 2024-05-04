import H2 from '../components/text/H2.tsx';
import PageHeader from '../components/PageHeader.tsx';

const About = () => {
  return (
    <div className='my-28'>
      <PageHeader
        title='About'
        subtitle='Learn about the history of our team and what we do.'
        imageSrc='/images/about_hero.png'
      />
      <section className='lg:flex lg:mt-0 mt-10 block items-center container'>
        <div className='lg:w-1/2 lg:pr-20 flex flex-col gap-4'>
          <H2>Team History</H2>
          <div className='flex flex-col gap-5'>
            <p>
              Founded by a student in Autumn 2023, the University of Washington
              Solar Decathlon team is the first Building Science RSO on campus.
              Our team consists of students across various majors, all with a
              passion for renewable energy.
            </p>
            <p>
              first competed in the 2024 Solar Decathlon as a team of 20 students.
              With the support of our faculty lead, Rob Pena, we look forward to
              future competitions and the continued growth of our club!
            </p>
          </div>
        </div>
        <img
          className='lg:w-1/2 w-full mt-10 h-auto align'
          src='/images/about_origin.png'
          alt='image of Gould Hall'
        />
      </section>
      <section className='lg:flex block mt-10 items-center container'>
        <div className='lg:w-1/2 lg:pl-20 flex flex-col gap-4'>
          <H2>Reaching Net Zero</H2>
          <div className='flex flex-col gap-5'>
            <p>
              The Paris Agreement was a document signed by over 190 countries in 
              2015 to reduce carbon emissions by 45% by 2030 and achieve net zero 
              by 2050. Since buildings account for approximately 35% of carbon
              emissions in the US and 40% of its energy usage, the Solar Decathlon 
              challenges students to design low-carbon, net zero energy homes for 
              disadvantaged communities.
            </p>
            <p>
              For students preparing to join the clean energy workforce, the Solar
              Decathlon is an excellent opportunity to gain real-life experience
              designing buildings for a more sustainable world.
            </p>
          </div>
        </div>
        <img
          className='lg:order-first lg:w-1/2 w-full h-auto mt-10'
          src='/images/about_origin.png'
          alt='image of Gould Hall'
        />
      </section>
    </div>
  );
};

export default About;
