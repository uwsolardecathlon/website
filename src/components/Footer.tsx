import {
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from 'react-icons/fa6';
import { MdOutlineMail as Email } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-neutral-100  text-white capitalize'>
        <div className='hidden md:flex flex-col px-24 py-16 max-w-screen-xl mx-auto'>
          <div className='flex flex-row w-full justify-between items-center pb-10'>
            <NavLink to='/'>
              <img src='/images/logo_inverse.svg' alt='' className='w-12' />
            </NavLink>
            <ul className='flex flex-row gap-6'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/team'>Team</NavLink>
              </li>
              <li>
                <NavLink to='/competition'>Competition</NavLink>
              </li>
              <li>
                <NavLink to='/fundraising'>Fundraising</NavLink>
              </li>
              <li>
                <NavLink to='/join'>Join</NavLink>
              </li>
            </ul>
          </div>

          <div className='flex w-full justify-between border-t border-neutral-200 pt-6 pr-4'>
            <p className='text-xs'>Copyright © 2024 UW Solar Decathlon</p>
            <div className='flex gap-4 scale-150'>
              <Link to='#'>
                <Email />
              </Link>
              <Link
                to='https://www.linkedin.com/company/uw-solar-decathlon/'
                target='_blank'
              >
                <LinkedIn />
              </Link>
              <Link
                to='https://www.instagram.com/uwsolardecathlon/'
                target='_blank'
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className='block md:hidden bg-neutral-100 text-white py-12 px-8 capitalize'>
        <div className='flex w-full flex-col justify-between pb-10'>
          <NavLink to='/'>
            <img src='/images/logo_inverse.svg' alt='' className='w-12 pb-10' />
          </NavLink>
          <ul className='flex gap-4 flex-row'>
            <div className='flex flex-col w-full justify-between gap-6'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/team'>Team</NavLink>
              </li>
            </div>
            <div className='flex flex-col w-full justify-between gap-6'>
              <li>
                <NavLink to='/competition'>Competition</NavLink>
              </li>
              <li>
                <NavLink to='/fundraising'>Fundraising</NavLink>
              </li>
              <li>
                <NavLink to='/join'>Join</NavLink>
              </li>
            </div>
          </ul>
        </div>

        <div className='flex flex-col border-t border-neutral-200 pt-8 gap-4'>
          <div className='flex gap-4'>
            <Link to='#'>
              <Email size={28} />
            </Link>
            <Link
              to='https://www.linkedin.com/company/uw-solar-decathlon/'
              target='_blank'
            >
              <LinkedIn size={28} />
            </Link>
            <Link
              to='https://www.instagram.com/uwsolardecathlon/'
              target='_blank'
            >
              <Instagram size={28} />
            </Link>
          </div>
          <p className='text-xs'>Copyright © 2024 UW Solar Decathlon</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
