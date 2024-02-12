//import React from 'react';
import Button from './Button.tsx';
import Navitem  from './Navitem.tsx';

function Navbar() {
    return (
    <nav className={'flex flex-row justify-between gap-17 bg-opacity-0 mx-0 px-11 py-5 items-center'}>
        <h1>Logo</h1>
        <ul className={'flex flex-row justify-between gap-8 list-style-type: none;'}>
            <Navitem label='Home'/>
            <Navitem label='Team'/>
            <Navitem label='Competition'/>
            <Navitem label='Fundraising'/>
            <Button label='Join' />
        </ul>
    </nav>
    );
}
  
export default Navbar;
  