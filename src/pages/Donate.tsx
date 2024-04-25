import Button from "../components/Button.tsx";
import H2 from "../components/text/H2";
import PageHeader from "../components/PageHeader.tsx";
import Subtitle2 from "../components/text/Subtitle2.tsx";
import TLItem from "../components/Timelineitem.tsx";
import TLContent from "../components/Timelinecontent.tsx";

const Donate = () => {
  return (
    <>
      {/* Desktop */}
      <div className="lg:block hidden my-28">
        <PageHeader
          title="Donate"
          subtitle="The University of Washington Solar Decathlon Club looks
        to engage students to innovative learning through events, research
        and participating within the competition, especially when flying
        students over to Colorado."
          imageSrc="/images/about_hero.png"
          imageAlt="altText"
        />

        <section className="flex flex-row gap-20 items-center container">
          <div className="flex flex-col gap-7">
            <H2>Donate</H2>
            <p>
              We are extremely grateful to those who have supported our journey
              so far. We are looking to expand our focus and message to students
              and industry to provide a meaningful impact. If you are willing to
              support us on our journey, please click on the donation button
              below.
            </p>
            <div>
              <Button label="Donate" />
            </div>
          </div>
          <img
            className="h-auto max-w-[555px]"
            src="/images/about_origin.png"
            alt="Image of Gould Hall (change later)"
          />
        </section>
      </div>

      {/* Mobile */}
      <div className="my-28">
        <PageHeader
          title="Donate"
          subtitle="The University of Washington Solar Decathlon Club looks
        to engage students to innovative learning through events, research
        and participating within the competition, especially when flying
        students over to Colorado."
          imageSrc="/images/about_hero.png"
          imageAlt="altText"
        />

        <section className="flex flex-row gap-20 items-center container">
          <div className="flex flex-col gap-7">
            <H2>Donate</H2>
            <p>
              We are extremely grateful to those who have supported our journey
              so far. We are looking to expand our focus and message to students
              and industry to provide a meaningful impact. If you are willing to
              support us on our journey, please click on the donation button
              below.
            </p>
            <div>
              <Button label="Donate" />
            </div>
          </div>
          <img
            className="h-auto max-w-[555px]"
            src="/images/about_origin.png"
            alt="Image of Gould Hall (change later)"
          />
        </section>
      </div>
    </>
  );
};

export default Donate;
