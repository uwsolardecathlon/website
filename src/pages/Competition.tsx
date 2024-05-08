import H2 from '../components/text/H2.tsx';
import PageHeader from '../components/PageHeader.tsx';
import TimelinePhase from '../components/TimelinePhase.tsx';
import { phases } from '../data/timeline.tsx';

const Competition = () => {
  return (
    <div className='mt-24 mb-16 md:mt-32 md:mb-20'>
      <PageHeader
        title='Competition'
        subtitle='Learn about the Solar Decathlon and the work we do throughout the year.'
        imageSrc='/images/competition_hero.png'
        imageAlt=''
      />
      <section className='flex max-md:flex-col max-md:gap-8 items-start lg:items-center container'>
        <div className='md:w-1/2 md:pr-12 lg:pr-20 flex flex-col gap-4'>
          <H2>Background</H2>
          <p>
            The Solar Decathlon is a collegiate competition sponsored by the US
            Department of Energy, consisting of a Design Challenge and a Build
            Challenge. We participate in the annual Design Challenge, which
            entails designing a high-performance, low-carbon building to address
            a real-world issue. Teams register in October, compete in the
            semifinals in February, then finalists present their design to the
            National Renewable Energy Laboratory in Colorado. Each design is
            graded on 10 contests that are developed each year to inspire teams
            to learn new innovative techniques for designing net zero energy
            buildings.
          </p>
        </div>
        <img
          className='w-full md:w-1/2'
          src='/images/competition_drawing.png'
          alt=''
        />
      </section>
      <div className='bg-secondary my-12 py-12 md:my-20 md:py-20'>
        <section className='flex max-md:flex-col max-md:gap-4 items-start container'>
          <H2 className='md:w-1/2 md:pr-12 lg:pr-20'>
            Designing a Net Zero Energy Home
          </H2>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <p>
              When designing a net zero energy home, there are many factors to
              consider. Who are you designing your building for? What is the
              peak load of your building? Is it environmentally friendly? These
              questions and many others are asked by the jury to determine who
              wins the competition.
            </p>
            <p>
              In Washington State, it is simple to design a building with low
              operational carbon as the weather of Washington is around the
              average comfort level of 65 degrees Fahrenheit. When it comes to
              designing a new building, the biggest concern is embodied carbon.
            </p>
            <p>
              Embodied carbon is the carbon dioxide (CO₂) emissions associated
              with materials and construction processes throughout the entire
              life-cycle of a building or infrastructure. By minimizing the
              embodied carbon of a building, you can create the most sustainable
              buildings in the world. For some buildings, you could even store
              carbon from the atmosphere to reduce the effects of global
              warming.
            </p>
          </div>
        </section>
      </div>

      <section className='flex flex-col gap-8 container'>
        <H2>Project Timeline</H2>
        <ul className='flex max-lg:flex-col justify-between gap-10 lg:gap-16'>
          {phases.map((phase, index) => (
            <TimelinePhase index={index + 1} key={index} {...phase} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Competition;
