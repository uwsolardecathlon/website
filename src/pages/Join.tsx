import Button from "../components/Button.tsx";
import H1 from "../components/text/H1";
import H2 from "../components/text/H2";

const Join = () => {
  return(
    <>
      <section className="flex flex-col gap-20 mt-40">
        <H1>Join</H1>
      </section>

      <section className="flex flex-row mt-28 gap-20 items-center">
        <div className="flex flex-col gap-7 w-2/5">
          <H2>How do I join?</H2>
          <p>
            The University of Solar Decathlon is always looking for
            new members to join our team. Through interdisciplinary
            project management, we are looking to get all students
            into the clean energy workforce. If you are interested
            in participating, please click the Apply button below.
          </p>
          <div>
            <Button label="Apply"/>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default Join;
