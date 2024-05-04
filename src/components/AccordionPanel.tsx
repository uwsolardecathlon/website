import { IoChevronDown as Chevron } from 'react-icons/io5';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import H3 from './text/H3';

export interface AccordionPanelProps {
  title: string;
  content: React.ReactNode;
}

const AccordionPanel = ({ title, content }: AccordionPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const opacityAnimation = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0,
      },
    },
  };

  const heightAnimation = {
    open: {
      height: 'auto',
    },
    collapsed: { height: 0 },
  };

  return (
    <div className='w-full border-b border-neutral-300'>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex items-center gap-4 justify-between py-4 cursor-pointer'
      >
        <H3>{title}</H3>
        <Chevron
          size={20}
          aria-label={`${isOpen ? 'Close' : 'Open'}`}
          className='shrink-0'
          style={{
            transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)',
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={heightAnimation}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <motion.div
              className='pb-4'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={opacityAnimation}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionPanel;
