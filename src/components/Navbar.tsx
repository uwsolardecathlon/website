import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { Fade as Hamburger } from "hamburger-react";
import { twMerge } from 'tailwind-merge';

import Button from "./Button.tsx";
import NavItem from "./Navitem.tsx";

function Navbar() {
  const before = (window.innerWidth * -100) / 100;
  const [show, setShow] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const transition = useTransition(show, {
    from: { x: before, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: before, opacity: 0 },
  });

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop */}
      <div className={twMerge("hidden md:flex flex-row justify-between gap-17 bg-opacity-0 mx-0 px-24 py-5 items-center ease-in-out duration-150"
      , navBg ? 'bg-primary-dark/90 text-white' : 'bg-bg-transparent')}>
        <NavLink to="/">
          <p>Logo</p>
        </NavLink>
        <ul className={"flex flex-row justify-between gap-8"}>
          <NavItem label="home" />
          <NavItem label="about" />
          <NavItem label="team" />
          <NavItem label="competition" />
          <NavItem label="donate" />
          <NavItem label="contact" />
          <li>
            <NavLink to="/join" tabIndex={-1}>
              <Button label="join" variant={navBg ? 'tertiary' : 'primary'} className="uppercase" />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <div className="flex w-full h-[10vh] justify-between items-center p-8">
          <p>Logo</p>
          <Hamburger
            direction="right"
            toggle={setShow}
            toggled={show}
            size={25}
          />
        </div>
        {transition((style, item) =>
          item ? (
            <animated.ul
              style={style}
              className={
                "item flex relative opacity-10 text-xl w-full h-[90vh] justify-items-center justify-around flex-wrap flex-col bg-white"
              }
            >
              <NavItem label="home" />
              <NavItem label="team" />
              <NavItem label="competition" />
              <NavItem label="donate" />
              <NavItem label="join" />
            </animated.ul>
          ) : (
            ""
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
