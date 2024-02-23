import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import { Fade as Hamburger } from 'hamburger-react';

import Button from './Button.tsx';
import NavItem from './Navitem.tsx';

function Navbar() {
  const before = (window.innerWidth * -100) / 100
  const [show, setShow] = useState(false)
  const transition = useTransition(show,
  {
    from: {x: before, opacity: 0},
    enter: {x: 0, opacity: 1},
    leave: {x: before, opacity: 0}
  });
  
  return (
    <nav className='fixed w-full z-50'>
      {/* Desktop */}
      <div className='hidden md:flex flex-row justify-between gap-17 bg-opacity-0 mx-0 px-11 py-5 items-center'>
        <p>Logo</p>
        <ul className={'flex flex-row justify-between gap-8'}>
          <NavItem label='home' />
          <NavItem label='team' />
          <NavItem label='competition' />
          <NavItem label='donate' />
          <li>
            <NavLink to='/join' tabIndex={-1}>
              <Button label='join' className='uppercase' />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className='flex flex-col items-center md:hidden'>
        <div className='flex w-full h-[10vh] justify-between items-center p-4'>
          <p>Logo</p>
          <Hamburger toggle={setShow} toggled={show} size={25} />
        </div> 
        {transition((style, item) =>
         item ? 
          <animated.ul style={style} className={'item flex relative opacity-10 text-xl w-full h-[90vh] justify-items-center justify-around flex-wrap flex-col bg-neutral-400/50'}>  
            <NavItem label='home' />
            <NavItem label='team' />
            <NavItem label='competition' />
            <NavItem label='donate' />
            <NavItem label='join' />
          </animated.ul> : ''
        )}
      </div>
    </nav>
  );
}

export default Navbar;
