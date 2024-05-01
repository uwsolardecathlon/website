import H1 from "../components/text/H1";
import Subtitle1 from "./text/Subtitle1";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
}

const PageHeader = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageHeaderProps) => {
  return (
    <>
      {/* Desktop */}
      <section className="lg:flex hidden flex-col gap-12 container pb-20">
        <div>
          <H1>{title}</H1>
          <Subtitle1 className="mt-4 max-w-md">{subtitle}</Subtitle1>
        </div>
        <img
          className="max-h-[600px] max-w-full object-cover"
          src={imageSrc}
          alt={imageAlt ?? ""}
        />
      </section>

      {/* Mobile */}
      <section className="lg:hidden flex flex-col md:gap-20 gap-16 container">
        <div className="text-center">
          <H1>{title}</H1>
          <Subtitle1 className="mt-4 max-w-[670px] mx-auto">
            {subtitle}
          </Subtitle1>
        </div>
        <img
          className="h-auto max-w-full"
          src={imageSrc}
          alt={imageAlt ?? ""}
        />
      </section>
    </>
  );
};

export default PageHeader;
