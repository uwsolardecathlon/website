import { twMerge } from "tailwind-merge";
import H1 from "../components/text/H1";
import Subtitle1 from "./text/Subtitle1";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
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
  className,
  ...rest
}: PageHeaderProps) => {
  return (
    <section
      className="container flex flex-col max-sm:text-center gap-4 sm:gap-8 md:gap-12 pb-12 md:pb-20"
      {...rest}
    >
      <div className="flex flex-col gap-4">
        <H1>{title}</H1>
        <Subtitle1
          className={twMerge(
            "leading-tight max-sm:mx-auto max-w-56 sm:max-w-[400px]",
            className
          )}
        >
          {subtitle}
        </Subtitle1>
      </div>
      <img
        className="h-auto aspect-[4/3] sm:aspect-[16/9] object-cover max-w-full"
        src={imageSrc}
        alt={imageAlt ?? ""}
      />
    </section>
  );
};

export default PageHeader;
