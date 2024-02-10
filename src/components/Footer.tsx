import {
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from "react-icons/fa6";
import { MdOutlineMail as Email } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-white flex flex-col px-16 py-16 uppercase">
      <div className="flex w-full justify-between pb-6">
        <div>logo</div>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Competition</li>
          <li>Fundraising</li>
          <li>Join</li>
        </ul>
      </div>

      <div className="flex w-full justify-between border-t border-neutral-200 pt-6">
        <p className="text-xs">Copyright © 2024 UW Solar Decathlon</p>
        <div className="flex gap-4">
          <Email />
          <LinkedIn />
          <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
