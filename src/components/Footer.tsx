import {
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from "react-icons/fa6";
import { MdOutlineMail as Email } from "react-icons/md";
import {Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 w-full text-white flex absolute flex-col px-24 py-16 bottom-0 uppercase min-w-[845px]">
      <div className="flex flex-row w-full justify-between pb-10">
        <div>logo</div>
        <ul className="flex flex-row gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Competition</li>
          <li>Fundraising</li>
          <li>Join</li>
        </ul>
      </div>

      <div className="flex w-full justify-between border-t border-neutral-200 pt-6 pr-4">
        <p className="text-xs">Copyright © 2024 UW Solar Decathlon</p>
        <div className="flex gap-4 scale-150">
          <Email />
          <LinkedIn />
          <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
