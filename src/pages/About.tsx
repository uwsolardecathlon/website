import H2 from '../components/text/H2.tsx';
import Subtitle2 from '../components/text/Subtitle2.tsx';
import PageHeader from '../components/PageHeader.tsx';

const About = () => {
  return (
    <div className='my-28'>
      <PageHeader
        title='About'
        subtitle='Learn about the history of our team and what we do.'
        imageSrc='/images/about_hero.png'
      />
      <section className='flex flex-row gap-20 items-center container'>
        <div className='flex flex-col gap-7'>
          <Subtitle2>WHO WE ARE</Subtitle2>
          <H2>Competition Origins</H2>
          <div className='flex flex-col gap-5'>
            <p>
              The Paris Agreement is a document signed by various countries in
              2015 to reduce usage to 45% by the end of 2030. The goal for the
              United States is to reduce carbon emissions to zero by 2050. As a
              push for that goal, the Solar Decathlon competition seeks to train
              students to join the clean energy workforce. Buildings use
              approximately 30% of the US’s total energy usage. To reach a net
              zero carbon goal by 2050, the Solar Decathlon is looking to train
              students by designing net zero energy homes for disadvantaged
              communities.
            </p>
            <p>
              The University of Washington Solar Decathlon team started in
              Autumn 2023 when a student developed the idea to start the first
              ever Building Science RSO on campus. Starting off with small group
              meetings at Gould Hall, the club has grown into a group that
              learns about innovative energy techniques each day. With Faculty
              Lead Rob Pena backing the team, the Solar Decathlon group has a
              great backing for future competitions.
            </p>
          </div>
        </div>
        <img
          className='h-auto max-w-[555px]'
          src='/images/about_origin.png'
          alt='image of Gould Hall'
        />
      </section>
      <section className='flex flex-row mt-28 gap-20 items-center container'>
        <img
          className='h-auto max-w-[555px]'
          src='/images/about_origin.png'
          alt='image of Gould Hall'
        />
        <div className='flex flex-col gap-7'>
          <Subtitle2>WHAT WE DO</Subtitle2>
          <H2>Some Short Tagline</H2>
          <div className='flex flex-col gap-5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos quas voluptatibus quibusdam quae.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
