import { useState, useEffect } from 'react';
import {
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from 'react-icons/fa6';
import { MdOutlineMail as Email } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';

import sanityClient from '../client.tsx';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [instagram, setInstagram] = useState('');

  useEffect(() => {
    const query = `*[_type=='contact'][0]`;

    const getData = async () => {
      const { email, linkedIn, instagram } = await sanityClient.fetch(query);
      setEmail(email);
      setLinkedIn(linkedIn);
      setInstagram(instagram);
    };

    getData();
  }, []);

  return (
    <>
      <footer className='w-full bg-neutral-100  text-white capitalize'>
        <div className='hidden md:flex flex-col px-24 py-16 max-w-screen-xl mx-auto'>
          <div className='flex flex-row w-full justify-between items-center pb-10'>
            <NavLink to='/'>
              <img
                src='/images/logo.svg'
                alt=''
                className='w-16'
                aria-label='Home'
              />
            </NavLink>
            <ul className='flex flex-row gap-6'>
              <li className='custom-underline underline-white'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='custom-underline underline-white'>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li className='custom-underline underline-white'>
                <NavLink to='/team'>Team</NavLink>
              </li>
              <li className='custom-underline underline-white'>
                <NavLink to='/competition'>Competition</NavLink>
              </li>
              <li className='custom-underline underline-white'>
                <NavLink to='/donate'>Donate</NavLink>
              </li>
              <li className='custom-underline underline-white'>
                <NavLink to='/join'>Join</NavLink>
              </li>
            </ul>
          </div>

          <div className='flex w-full justify-between border-t border-neutral-200 pt-6 pr-4'>
            <p className='text-xs'>Copyright © 2024 UW Solar Decathlon</p>
            <div className='flex gap-4 scale-150'>
              <Link
                to={`mailto:${email}`}
                className='transition ease-in-out duration-300 hover:text-primary'
                aria-label='Email'
              >
                <Email />
              </Link>
              <Link
                to={linkedIn}
                target='_blank'
                className='transition ease-in-out duration-300 hover:text-primary'
                aria-label='LinkedIn'
              >
                <LinkedIn />
              </Link>
              <Link
                to={instagram}
                target='_blank'
                className='transition ease-in-out duration-300 hover:text-primary'
                aria-label='Instagram'
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/*Mobile*/}
      <footer className='block md:hidden bg-neutral-100 text-white py-12 px-8 capitalize'>
        <div className='flex w-full flex-col justify-between pb-10'>
          <NavLink to='/'>
            <img
              src='/images/logo.svg'
              alt=''
              className='w-16 pb-10'
              aria-label='Home'
            />
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
                <NavLink to='/donate'>Donate</NavLink>
              </li>
              <li>
                <NavLink to='/join'>Join</NavLink>
              </li>
            </div>
          </ul>
        </div>

        <div className='flex flex-col border-t border-neutral-200 pt-8 gap-4'>
          <div className='flex gap-4'>
            <Link to={`mailto:${email}`} aria-label='Email'>
              <Email size={28} />
            </Link>
            <Link to={linkedIn} target='_blank' aria-label='LinkedIn'>
              <LinkedIn size={28} />
            </Link>
            <Link to={instagram} target='_blank' aria-label='Instagram'>
              <Instagram size={28} />
            </Link>
          </div>
          <p className='text-xs'>{`Copyright © ${new Date().getFullYear()} UW Solar Decathlon`}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
