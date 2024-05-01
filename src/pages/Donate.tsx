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
          subtitle="Your donations will help fund our events, research, and participation in the Solar Decathlon Competition."
          imageSrc="/images/donate_hero.png"
          imageAlt="altText"
        />

        <section className="flex flex-row gap-20 items-center container">
          <div className="flex flex-col gap-7">
            <H2>Support Us</H2>
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
            src="/images/donate_image.png"
            alt="People in front of donate table."
          />
        </section>
      </div>

      {/* Mobile */}
      <div className="lg:hidden my-28">
        <PageHeader
          title="Donate"
          subtitle="Your donations will help fund our events, research, and participation in the Solar Decathlon Competition."
          imageSrc="/images/donate_hero.png"
          imageAlt="altText"
        />
        <div>
          <section className="flex flex-col gap-10 items-center container pt-20">
            <div className="flex flex-col gap-7">
              <H2>Support Us</H2>
              <p>
                We are extremely grateful to those who have supported our
                journey so far. We are looking to expand our focus and message
                to students and industry to provide a meaningful impact. If you
                are willing to support us on our journey, please click on the
                donation button below.
              </p>
              <div>
                <Button label="Donate" />
              </div>
            </div>
            <img
              className="h-auto w-auto"
              src="/images/donate_image.png"
              alt="People in front of donate table."
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Donate;
