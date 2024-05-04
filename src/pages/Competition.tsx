import H2 from '../components/text/H2.tsx';
import Subtitle2 from '../components/text/Subtitle2.tsx';
import TLItem from '../components/Timelineitem.tsx';
import PageHeader from '../components/PageHeader.tsx';
import TLContent from '../components/Timelinecontent.tsx';

const Competition = () => {
  const phase1 = (
    <TLContent 
      top='We start by devising a project that targets an issue in Washington relating to climate change, affordability, or environmental justice. This involves:'
      list={["Conducting a site analysis", "Designing a building that follows passive design strategies and meets the needs of the target market", "Running energy modeling, embodied carbon analysis, financial analysis"]}
      bottom='Though optional, it is highly recommended that teams submit a project summary to obtain preliminary feedback on their design.'
    />
  );
  const phase2 = (
    <TLContent 
      top='Next, we refine our building design and develop a 10-minute presentation in preparation for the semifinals. This involves:'
      list={["Revising the project summary based on feedback", "Creating full HVAC, electrical, and plumbing designs for the house Ensuring we follow all zero energy home codes, building codes, and structural codes", "Soliciting feedback from industry partners in architecture and engineering"]}
      bottom='At the virtual semifinals in February, all teams present their projects to industry experts. Up to 10 teams per division are selected to advance to the final stage of the competition.'
    />
  );
  const phase3 = (
    <TLContent 
      top='If we advance, we compete in the finals. If not, we continue as an Exhibition Team and present our final design for feedback. This involves:'
      list={["Finalizing our design, MEP systems, energy ratings, and calculations", "Creating a design narrative dictating every detail about the project", "Preparing a presentation and poster Recording a 90-second video pitch marketing our design to the jurors"]}
      bottom='The finals take place in April at the National Renewable Energy Laboratory in Colorado. This event is an exciting opportunity for participants to present their final design, network, and connect with both peers and industry experts.'
    />
  );
  return (
    <>
      {/* Desktop */}
      <div className='lg:block hidden my-28'>
        <PageHeader
          title='Competition'
          subtitle='Learn about the Solar Decathlon and the work we do throughout the year.'
          imageSrc='/images/home_hero.png'
          imageAlt='picture of Solar Decathlon event'
        />
        {/* <section className="flex flex-col gap-20 mt-40">
          <div className="flex flex-col gap-7 ">
            <H1>Competition</H1>
            <Subtitle1>
              Description
            </Subtitle1>
          </div>
          <img
            src="/images/home_hero.png"
            alt="picture of Solar Decathlon event"
            className="max-h-[40rem]"
          />
        </section> */}
        <section className='flex flex-row mt-10 gap-20 items-center container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-5'>
              <Subtitle2>BACKGROUND</Subtitle2>
              <H2>Solar Decathlon</H2>
              <p>
                The Solar Decathlon design competition takes over the course of a
                year. Teams register in October to present their design to the
                National Renewable Energy Laboratory in Colorado. Each design is
                graded on 10 contests that are developed each and every single
                year for student teams to learn brand new innovative techniques
                for designing net zero energy buildings.
              </p>
            </div>
            <div className='flex flex-col gap-5'>
              <Subtitle2>PROJECT</Subtitle2>
              <Subtitle2 className='font-semibold'>
                Designing a Net Zero Energy Home
              </Subtitle2>
              <p>
                When designing a net zero energy home, there are many things to
                consider. Who are you designing your building for? What is the
                peak load of your building? Is my house environmentally friendly?
                These questions and many others are asked by the Jury to consider
                which is the top place for the competition.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-7'>
            <img
              className='h-auto max-w-[555px]'
              src='/images/competition_drawing.png'
            />
            <p>
              Embodied carbon is the carbon dioxide (CO<sub>2</sub>) emissions
              associated with materials and construction processes throughout the
              whole life-cycle of a building or infrastructure. By minimizing the
              embodied carbon of your building, you can create the most
              sustainable buildings in the world. For some buildings, you could
              even store carbon from the atmosphere to reduce the effects of
              global warming.
            </p>
          </div>
        </section>
        <section className='flex flex-col gap-7 mt-28 container'>
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
            <TLItem
              label='Spring Quarter: Finals'
              number='3'
              content={phase3}
            />
          </ul>
        </section>
      </div>

      {/* Mobile */}
      <div className='lg:hidden flex flex-col gap-20 my-28'>
        <PageHeader
          title='Competition'
          subtitle='Learn about the Solar Decathlon and the work we do throughout the year.'
          imageSrc='/images/home_hero.png'
          imageAlt='picture of Solar Decathlon event'
        />
        <section className='flex flex-col gap-6 items-center container'>
          <H2>Solar Decathlon</H2>
          <p>
            The Solar Decathlon design competition takes over the course of a
            year. Teams register in October to present their design to the
            National Renewable Energy Laboratory in Colorado. Each design is
            graded on 10 contests that are developed each and every single
            year for student teams to learn brand new innovative techniques
            for designing net zero energy buildings.
          </p>
          <img
            className='h-auto w-full'
            src='/images/competition_drawing.png'
          />
        </section>
        <section className='flex flex-col gap-5 container bg-neutral-300 md:py-24 py-8'>
          <H2>Designing a Net Zero Energy Home</H2>
          <p>
            When designing a net zero energy home, there are many things to
            consider. Who are you designing your building for? What is the
            peak load of your building? Is my house environmentally friendly?
            These questions and many others are asked by the Jury to consider
            which is the top place for the competition.
          </p>
          <p>
            Embodied carbon is the carbon dioxide (CO<sub>2</sub>) emissions
            associated with materials and construction processes throughout the
            whole life-cycle of a building or infrastructure. By minimizing the
            embodied carbon of your building, you can create the most
            sustainable buildings in the world. For some buildings, you could
            even store carbon from the atmosphere to reduce the effects of
            global warming.
          </p>
        </section>
        <section className='flex flex-col gap-7 container'>
          <H2>Project Timeline</H2>
          <ul className='flex flex-col flex-wrap'>
            <TLItem
              className='pt-0'
              label='Fall Quarter: Project Summary'
              number='1'
              content={phase1}
            />
            <TLItem
              label='Winter Quarter: Semifinals'
              number='2'
              content={phase2}
            />
            <TLItem
              label='Spring Quarter: Finals'
              number='3'
              className='border-b-0'
              content={phase3}
            />
          </ul>
        </section>
      </div>
    </>
  );
};

export default Competition;
