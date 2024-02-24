import {
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from 'react-icons/fa6';
import { MdOutlineMail as Email } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='hidden md:flex bg-neutral-100 w-full text-white flex-col px-24 py-16 uppercase '>
        <div className='flex flex-row w-full justify-between pb-10'>
          <div>logo</div>
          <ul className='flex flex-row gap-6'>
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Competition</li>
            <li>Fundraising</li>
            <li>Join</li>
          </ul>
        </div>

        <div className='flex w-full justify-between border-t border-neutral-200 pt-6 pr-4'>
          <p className='text-xs'>Copyright © 2024 UW Solar Decathlon</p>
          <div className='flex gap-4 scale-150'>
            <Email />
            <Link to='https://www.linkedin.com/company/uw-solar-decathlon/'>
              <LinkedIn />
            </Link>

            <Instagram />
          </div>
        </div>
      </footer>
      <footer className='block md:hidden bg-neutral-100 text-white px-16 py-16 uppercase'>
        <div className='flex w-full flex-col justify-between pb-10'>
          <div className='pb-10'>logo</div>
          <ul className='flex gap-4 flex-row'>
            <div className='flex flex-col w-full justify-between gap-6'>
              <li>Home</li>
              <li>About</li>
              <li>Team</li>
            </div>
            <div className='flex flex-col w-full justify-between gap-6'>
              <li>Competition</li>
              <li>Fundraising</li>
              <li>Join</li>
            </div>
          </ul>
        </div>

        <div className='flex flex-col border-t border-neutral-200 pt-8 gap-4'>
          <div className='flex gap-4'>
            <Email size={28} />
            <LinkedIn size={28} />
            <Instagram size={28} />
          </div>
          <p className='text-xs'>Copyright © 2024 UW Solar Decathlon</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
