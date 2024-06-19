import { useState } from "react";
import Logo from "../images/logo-bookmark.svg";
import LogoLight from "../images/logo-bookmark-footer.svg";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav id="nav" className="p-12">
      <div
        className={`flex flex-col items-center justify-center space-y-7 text-white text-xl uppercase absolute w-full h-full bg-slate-500 z-10 top-0 left-0 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <a href="" className="border-b-2 border-white">
          Features
        </a>
        <a href="" className="border-b-2 border-white">
          Dowanload
        </a>
        <a href="" className="border-b-2 border-white">
          FAQ
        </a>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="z-20">
          <img src={isMenuOpen ? LogoLight : Logo} alt="logo" />
        </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-10 text-grayishBlue items-center">
          <a href="#features" className="uppercase hover:text-softRed">
            Features
          </a>
          <a href="#download" className="uppercase hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="uppercase hover:text-softRed">
            FAQ
          </a>
          <button
            id="btn"
            className="bg-softRed text-white py-2 px-8 rounded-lg border-2 hover:border-softRed hover:bg-white hover:text-softRed uppercase"
          >
            Login
          </button>
        </div>
        {/* menu button */}
        <button
          id="menu-btn"
          className={`${
            isMenuOpen && `open`
          } absolute right-12 z-10 md:hidden top-12`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="duration-300 block hamburger-top w-8 h-1 bg-black"></span>
          <span className="duration-300 mt-1 block hamburger-middle w-8 h-1 bg-black"></span>
          <span className="duration-300 mt-1 block hamburger-bottom w-8 h-1 bg-black"></span>
        </button>
      </div>
    </nav>
  );
}
