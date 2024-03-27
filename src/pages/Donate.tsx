import Button from "../components/Button.tsx";
import H1 from "../components/text/H1";
import H2 from "../components/text/H2";

const Donate = () => {
  return(
    <>
      <section className="flex flex-col gap-20 mt-40">
        <H1>Support</H1>
      </section>

      <br />

      <section className="flex flex-row mt-28 gap-20 items-center">
        <div className="flex flex-col gap-7">
          <H2>Donate</H2>
          <p>
            We are extremely grateful to those who have supported our
            journey so far. We are looking to expand our focus and
            message to students and industry to provide a meaningful
            impact. If you are willing to support us on our journey, please
            click on the donation button below.
          </p>
          <div>
            <Button label="Donate" />
          </div>
        </div>
        <img className="h-auto max-w-[555px]" src="/images/about_origin.png" alt="Image of Gould Hall (change later)"/>
      </section>
    </>
  );
};

export default Donate;
