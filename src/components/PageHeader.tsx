import H1 from '../components/text/H1';
import Subtitle1 from './text/Subtitle1';

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
    <section className='flex flex-col gap-12 container pb-20'>
      <div>
        <H1>{title}</H1>
        <Subtitle1 className='mt-4 max-w-sm'>{subtitle}</Subtitle1>
      </div>
      <img className='h-auto max-w-full' src={imageSrc} alt={imageAlt ?? ''} />
    </section>
  );
};

export default PageHeader;
