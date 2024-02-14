import { NavLink } from 'react-router-dom';
import { RiMenuLine as Open } from 'react-icons/ri';

import Button from './Button.tsx';
import NavItem from './NavItem.tsx';

function Navbar() {
  return (
    <nav>
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
      <div className='flex justify-between items-center p-4 md:hidden'>
        <p>Logo</p>
        <Open size={32} />
        {/* <ul className={'flex flex-row justify-between gap-8'}>
          <NavItem label='home' />
          <NavItem label='team' />
          <NavItem label='competition' />
          <NavItem label='donate' />
          <li>
            <NavLink to='/join' tabIndex={-1}>
              <Button label='join' className='uppercase' />
            </NavLink>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
