"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/assets/Images/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to handle click outside the menu

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Add event listener to detect clicks outside the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        id="home"
        className="navbar max-w-screen-xl px-4 z-50  navItem text-white font-RobotoSlab pt-5 mx-auto"
      >
        <div className="navbar-start z-50">
          <a href="#home">
            <Image src={logo} alt="Tech Plato Logo" />
          </a>
        </div>
        <div className="navbar-end z-50">
          <div className="dropdown dropdown-end" ref={menuRef}>
            <button
              className="rounded-lg bg-black p-2 lg:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {/* Hamburger Menu Icon */}

                <path
                  className={!menuOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                {/* Close Menu Icon */}
                <path
                  className={menuOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <a className="text-neutral  text-xl">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-neutral  text-xl">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral  text-xl">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-neutral  text-xl">Products</a>
                  <ul className="p-2 z-50">
                    <li>
                      <a
                        href="https://webloo.webflow.io/"
                        className="text-neutral  text-xl"
                      >
                        webloo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://host-air.netlify.app/"
                        className="text-neutral  text-xl"
                      >
                        Host Air
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-end hidden lg:flex z-50">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-white text-xl">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white text-xl">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-xl">
                Contact
              </a>
            </li>
            <li className="z-50">
              <details>
                <summary className="text-xl">Products</summary>
                <ul className="p-2 bg-white">
                  <li>
                    <a
                      href="https://webloo.webflow.io/"
                      className="text-neutral font-medium text-base"
                    >
                      webloo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://host-air.netlify.app/"
                      className="text-neutral font-medium  text-base"
                    >
                      HostAir
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
