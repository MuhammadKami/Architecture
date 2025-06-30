import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'MAIN', path: '/' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'PROJECT', path: '/project' },
    { name: 'CERTIFICATION', path: '/certification' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm static top-0 w-full">
      <div className="flex justify-between items-center h-20 px-4 lg:px-16">
        {/* Logo */}
        <div className="text-sm mt-5 logo"> DIGITAL PROJECTS</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-1 cursor-pointer">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:text-sm md:gap-8 lg:flex gap-10  lg:mr-50 md:mr-0 sm:mr-0 mr-0">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`tracking-widest lg:px-3 lg:py-[0.5px] md:text-sm lg:text-sm  ${
                  location.pathname === link.path
                    ? 'border-b-1 border-t-1 border-black'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden md:hidden flex flex-col bg-white px-6 py-4 space-y-4 shadow-md items-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={`block tracking-widest items-center lg:text-sm md:text-sm text-xs cursor-pointer ${
                  location.pathname === link.path
                    ? 'border-b-1 border-t-1 border-black '
                    : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
