import {
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from "react-icons/fa6";
import { MdOutlineMail as Email } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-white px-16 py-16 uppercase">
      <div className="flex w-full flex-col justify-between pb-10">
        <div className="pb-10">logo</div>
        <ul className="flex gap-4 flex-col">
          <div className="flex w-full justify-between gap-6">
            <li>Home</li>
            <li>Competition</li>
          </div>
          <div className="flex w-full justify-between gap-6">
            <li>About</li>
            <li>Fundraising</li>
          </div>
          <div className="flex w-full gap-56">
            <li>Team</li>
            <li>Join</li>
          </div>
        </ul>
      </div>

      <div className="flex flex-col border-t border-neutral-200 pt-10">
        <div className="flex gap-4 scale-150 px-16 pb-4">
          <Email />
          <LinkedIn />
          <Instagram />
        </div>
        <p className="text-xs">Copyright © 2024 UW Solar Decathlon</p>
      </div>
    </footer>
  );
};

export default Footer;
