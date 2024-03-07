import Button from "../components/Button.tsx";
import { GoArrowRight } from "react-icons/go";
import H1 from "../components/text/H1.tsx";
import H2 from "../components/text/H2.tsx";
import Subtitle1 from "../components/text/Subtitle1.tsx";
import Subtitle2 from "../components/text/Subtitle2.tsx";

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-7 mt-44">
        <H1>UW Solar Decathlon</H1>
        <Subtitle1>
          Building a sustainable future at the University of Washington
        </Subtitle1>
        <Button
          className="w-fit"
          label="Learn More"
          variant="secondary"
          icon={GoArrowRight}
        />
        <img
          src="/website/public/images/"
          alt="picture of solar decathlon event"
        />
      </section>
      <section className="flex flex-row bg-primary text-white">
        <H2>
          Our mission is to design and build energy-efficient, low-carbon
          buildings.
        </H2>
        <div className="flex flex-col">
          <Subtitle2>
            We participate in the Solar Decathlon, a prestigious collegiate
            competition run by the US Department of Energy.
          </Subtitle2>
          <Button label="View at the challenge" />
        </div>
      </section>
      <section className="flex space-between gap-24">
        <img
          className="h-auto w-auto py-20"
          src="/images/home_our_team.png"
          alt="our_team_image"
        ></img>
        <div className="flex flex-col gap-6 py-28">
          <H2>Our Team</H2>
          <p>
            UW Solar Decathlon is an interdisciplinary group involving
            architects and engineers to solve some of the world's greatest
            problems. Through design and optimization, we create energy
            efficient buildings to submit to the competition.
          </p>
          <p>
            We accept students across all majors to provide support to our
            cause. Our work involves marketing to students and industry,
            fundraising for the competition, and developing innovative research
            ideas to change the future.
          </p>
          <Button className="w-fit" label="Meet the team" variant="secondary" />
        </div>
      </section>
      <section>
        <div className='flex justify-content center'>
          <div>
            <H2>Get Involved</H2>
            <p>
              We accept any and all students to join our group. Find out how to
              join or support us through donations!
            </p>
          </div>
          <div className="flex gap-4">
            <Button label="Join Us" variant="primary" />
            <Button label="Donate" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
