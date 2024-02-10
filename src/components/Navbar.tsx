import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react router-dom';
import Button from './Button.tsx';

interface NavProp {
}

const NavBar : React.FC = (): NavProp => {
    return (
    <header className={'flex-auto justify-content: space-between gap-20;'}>
        <h1>Logo</h1>
        <ul className={'flex-auto justify-content: space-between gap-2;'}>
            <li>
                <Link to='/home'>HOME</Link>
            </li>
            <li>
                <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link to='/team'>TEAM</Link>
            </li>
            <li>
                <Link to='/competition'>COMPETITION</Link>
            </li>
            <li>
                <Link to='/funraising'>FUNDRAISING</Link>
            </li>
            <li>
                <Button label='Join' variant='primary'>

                </Button>
            </li>
        </ul>
    </header>
    );
};
  
  
export default NavBar;
  