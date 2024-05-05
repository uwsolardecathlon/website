import H2 from '../components/text/H2.tsx';
import TLItem from '../components/Timelineitem.tsx';
import PageHeader from '../components/PageHeader.tsx';
import TLContent from '../components/Timelinecontent.tsx';

const Competition = () => {
  const phase1 = (
    <TLContent
      top='We start by devising a project that targets an issue in Washington relating to climate change, affordability, or environmental justice. This involves:'
      list={[
        'Conducting a site analysis',
        'Designing a building that follows passive design strategies and meets the needs of the target market',
        'Running energy modeling, embodied carbon analysis, financial analysis',
      ]}
      bottom='Though optional, it is highly recommended that teams submit a project summary to obtain preliminary feedback on their design.'
    />
  );
  const phase2 = (
    <TLContent
      top='Next, we refine our building design and develop a 10-minute presentation in preparation for the semifinals. This involves:'
      list={[
        'Revising the project summary based on feedback',
        'Creating full HVAC, electrical, and plumbing designs for the house Ensuring we follow all zero energy home codes, building codes, and structural codes',
        'Soliciting feedback from industry partners in architecture and engineering',
      ]}
      bottom='At the virtual semifinals in February, all teams present their projects to industry experts. Up to 10 teams per division are selected to advance to the final stage of the competition.'
    />
  );
  const phase3 = (
    <TLContent
      top='If we advance, we compete in the finals. If not, we continue as an Exhibition Team and present our final design for feedback. This involves:'
      list={[
        'Finalizing our design, MEP systems, energy ratings, and calculations',
        'Creating a design narrative dictating every detail about the project',
        'Preparing a presentation and poster Recording a 90-second video pitch marketing our design to the jurors',
      ]}
      bottom='The finals take place in April at the National Renewable Energy Laboratory in Colorado. This event is an exciting opportunity for participants to present their final design, network, and connect with both peers and industry experts.'
    />
  );
  return (
    <div className='mt-24 mb-16 md:mt-32 md:mb-20'>
      <PageHeader
        title='Competition'
        subtitle='Learn about the Solar Decathlon and the work we do throughout the year.'
        imageSrc='/images/home_hero.png'
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

      <section className='flex flex-col gap-7 container'>
        <H2>Project Timeline</H2>
        <ul className='flex flex-row flex-wrap justify-between'>
          <TLItem
            label='Fall Quarter: Project Summary'
            number='1'
            content={phase1}
          />
          <TLItem
            label='Winter Quarter: Semifinals'
            number='2'
            content={phase2}
          />
          <TLItem label='Spring Quarter: Finals' number='3' content={phase3} />
        </ul>
      </section>
    </div>
  );
};

export default Competition;
