import React from 'react'

interface Navprop {
    label: string
}

function Navitem(prop: Navprop) {
    const {label = "default"} = prop; 
    return(
        <li className={'flex items-center'}>
                <a className = {'transition ease-in duration-300 hover:text-purple hover:scale-110'} href='/'>{label}</a>
        </li>
    );
}

export default Navitem