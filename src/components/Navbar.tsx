import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import { Fade as Hamburger } from 'hamburger-react';
import { twMerge } from 'tailwind-merge';

import Button from './Button.tsx';
import NavItem from './NavItem.tsx';

function Navbar() {
  const before = (window.innerWidth * 100) / 100;
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTransition(isOpen, {
    from: { x: before },
    enter: { x: 0 },
    leave: { x: before },
  });

  return (
    <nav className='fixed w-full z-50'>
      {/* Desktop */}
      <div className={twMerge('mx-0 ease-in-out duration-150 bg-white')}>
        <div className='hidden lg:flex flex-row justify-between items-center gap-17 px-24 py-5 max-w-screen-xl mx-auto'>
          <NavLink to='/' className='shrink-0'>
            <img
              src='/images/logo.svg'
              alt=''
              className='w-16'
              aria-label='Home'
            />
          </NavLink>
          <ul className={'flex flex-row justify-between gap-8'}>
            <NavItem label='home' />
            <NavItem label='about' />
            <NavItem label='team' />
            <NavItem label='competition' />
            <NavItem label='donate' />
            <NavItem label='contact' />
            <li>
              <NavLink to='/join' tabIndex={-1}>
                <Button label='join' variant='primary' className='capitalize' />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex flex-col items-center lg:hidden'>
        <div className='flex w-screen h-[10vh] justify-between items-center px-8 py-4 md:px-24 bg-white'>
          <NavLink to='/' className='shrink-0'>
            <img
              src='/images/logo.svg'
              alt=''
              className='w-16'
              aria-label='Home'
            />
          </NavLink>
          <Hamburger
            direction='right'
            toggle={setIsOpen}
            toggled={isOpen}
            size={25}
            label={isOpen ? 'Open menu' : 'Close menu'}
          />
        </div>
        {transition((style, item) =>
          item ? (
            <animated.ul
              style={style}
              className={
                'item flex relative text-xl w-full h-[90vh] justify-items-center justify-evenly flex-wrap flex-col nav-open bg-white'
              }
            >
              <NavItem label='home' onClick={() => setIsOpen(!isOpen)} />
              <NavItem label='about' onClick={() => setIsOpen(!isOpen)} />
              <NavItem label='team' onClick={() => setIsOpen(!isOpen)} />
              <NavItem label='competition' onClick={() => setIsOpen(!isOpen)} />
              <NavItem label='donate' onClick={() => setIsOpen(!isOpen)} />
              <NavItem label='contact' onClick={() => setIsOpen(!isOpen)} />
              <NavItem label='join' onClick={() => setIsOpen(!isOpen)} />
            </animated.ul>
          ) : (
            ''
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
