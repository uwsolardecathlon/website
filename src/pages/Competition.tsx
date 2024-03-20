import Button from "../components/Button.tsx";
import { GoArrowRight } from "react-icons/go";
import H1 from "../components/text/H1.tsx";
import H2 from "../components/text/H2.tsx";
import Subtitle1 from "../components/text/Subtitle1.tsx";
import Subtitle2 from "../components/text/Subtitle2.tsx";
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
      <section className="flex flex-row mt-28 items-center">

      </section>
    </>
  );
};

export default Competition;
