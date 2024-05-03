import { NavLink } from 'react-router-dom';

interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
}

function NavItem({ label, onClick}: NavItemProps) {
  return (
    <li onClick={onClick} className={'flex items-center justify-center'}>
      <NavLink
        to={`/${label === 'home' ? '' : label}`}
        className={
          'transition ease-in duration-300 hover:text-purple hover:scale-110 capitalize'
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
