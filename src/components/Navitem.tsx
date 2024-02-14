import { NavLink } from 'react-router-dom';

function NavItem({ label }: { label: string }) {
  return (
    <li className={'flex items-center'}>
      <NavLink
        to={`/${label === 'home' ? '' : label}`}
        className={
          'transition ease-in duration-300 hover:text-purple hover:scale-110 uppercase'
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
