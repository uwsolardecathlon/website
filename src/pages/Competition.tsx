import H1 from "../components/text/H1.tsx";
import H2 from "../components/text/H2.tsx";
import Subtitle1 from "../components/text/Subtitle1.tsx";
import Subtitle2 from "../components/text/Subtitle2.tsx";
import TLItem from "../components/Timelineitem.tsx";
const Competition = () => {
  return (
    <>
      <section className="flex flex-col gap-20 mt-40">
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
      </section>
      <section className="flex flex-row mt-28 gap-20 items-center">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <Subtitle2>BACKGROUND</Subtitle2>
            <H2>Solar Decathlon</H2>
            <p>
              The Solar Decathlon design competition takes over the course of a year. Teams register in October to present their design to the National Renewable Energy Laboratory in Colorado. Each design is graded on 10 contests that are developed each and every single year for student teams to learn brand new innovative techniques for designing net zero energy buildings.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Subtitle2>PROJECT</Subtitle2>
            <Subtitle2 className="font-semibold">Designing a Net Zero Energy Home</Subtitle2>
            <p>
              When designing a net zero energy home, there are many things to consider. Who are you designing your building for? What is the peak load of your building? Is my house environmentally friendly? These questions and many others are asked by the Jury to consider which is the top place for the competition.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <img
            className="h-auto max-w-[555px]"
            src="/images/competition_drawing.png"
          />
          <p>
            Embodied carbon is the carbon dioxide (CO<sub>2</sub>) emissions associated with materials and construction processes throughout the whole life-cycle of a building or infrastructure. By minimizing the embodied carbon of your building, you can create the most sustainable buildings in the world. For some buildings, you could even store carbon from the atmosphere to reduce the effects of global warming.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-7 mt-28">
        <Subtitle2>Something</Subtitle2>
        <H2>Project Timeline</H2>
        <ul className="flex flex-row justify-between">
          <TLItem label="Project Summary" number="1" content="The first competition stage is the Project Summary, which consists of an optional deliverable. The Project Summary provides an opportunity to submit preliminary information about a team’s project. Though optional, it is highly recommended that teams submit the Project Summary to gain preliminary, qualitative feedback to improve and iterate upon their design. It also familiarizes teams with the submission process and how to comply with Rules requirements."/>
          <TLItem label="Semifinals" number="2" content="The second competition stage is the Semifinal Competition, which consists of a deliverable and presentation to Jurors. The Semifinal Competition Event is a virtual event during which all Participant Teams present to panels of industry expert Jurors to compete for selection as Finalist Teams that advance to the final stage of the competition. All teams who intend to continue participation in the competition must present virtually during their assigned time at the Semifinal Competition Event. "/>
          <TLItem label="Finals" number="3" content="The third competition stage is the Final Submission, which consists of a deliverable. The Final Submission deliverable fully documents the final design. The Solar Decathlon Competition Event, to be held in April, is the culmination of the competition and consists of a presentation to Jurors. The Competition Event provides a rich experience for participants to present their final design projects to industry experts, engage in networking opportunities, listen to thought leader speakers, and connect with both peers and leading experts in the building industry. Finalist Teams compete for Division and Grand Winner Awards, and Exhibition Teams present to reviewers for feedback."/>
          <TLItem label="Title" number="4" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae quidem quos quas voluptatibus quibusdam quae."/>
        </ul>
      </section>
    </>
  );
};

export default Competition;
