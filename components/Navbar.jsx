import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const liStyles = `
    text-gray-800 
    text-center 
    py-6 
    md:px-6 
    border-b-2 
    md:border-b-0 
    border-indigo-500 
    hover:bg-indigo-500 
    md:hover:text-indigo-700 
    md:hover:bg-transparent 
    max-md:hover:text-white
    md:pb-2
  `;

  return (
    <nav className="bg-gray-50 w-full fixed top-0 left-0 right-0 z-10">
      <div className="px-4 mx-auto lg:max-w-7xl md:flex md:items-center md:justify-between md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* Logo here */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/images/logo-black.png"
                alt="Logo"
                width={250}
                height={150}
              />
            </Link>
          </div>
          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md bg-transparent hover:bg-transparent"
              onClick={handleMenuClick}
            >
              {" "}
              {isMenuOpen ? (
                <Image
                  src="/assets/close.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="menu-icon-color"
                />
              ) : (
                <Image
                  src="/assets/hamburger-menu.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                  className="menu-icon-color"
                />
              )}
            </button>
          </div>
        </div>
        {/* Navlinks */}
        <div
          className={`flex-1 justify-self-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isMenuOpen ? "p-12 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex">
            <li className={liStyles}>
              <Link href="/#about" onClick={handleMenuClick}>
                About
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/#skills" onClick={handleMenuClick}>
                Skills
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/#portfolio" onClick={handleMenuClick}>
                Portfolio
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/#workWithMe" onClick={handleMenuClick}>
                Work With Me
              </Link>
            </li>
            <li className={liStyles}>
              <Link href="/#contact" onClick={handleMenuClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
