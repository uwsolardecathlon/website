import AccordionPanel, { AccordionPanelProps } from './AccordionPanel';

export interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
  panels: AccordionPanelProps[];
}

const Accordion = ({ panels, className, ...rest }: AccordionProps) => {
  return (
    <ul className={className} {...rest}>
      {panels.map((panel, index) => (
        <li key={index}>
          <AccordionPanel {...panel} />
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
