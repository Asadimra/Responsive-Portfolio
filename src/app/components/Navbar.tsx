'use client'
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between lg:justify-around items-center h-20 bg-indigo-950 px-4">
        <h1 className="text-white text-3xl font-serif">Asad's Portfolio</h1>
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-end items-center font-serif text-xl absolute lg:static bg-indigo-950 lg:bg-transparent w-full lg:w-auto top-20 left-0 lg:top-0`}
        >
          <li className="list-none px-4 py-2 lg:py-0 text-white hover:text-purple-300">
            <a href="/Home">Home</a>
          </li>
          <li className="list-none px-4 py-2 lg:py-0 text-white hover:text-purple-300">
            <a href="/Skills">About</a>
          </li>
          <li className="list-none px-4 py-2 lg:py-0 text-white hover:text-purple-300">
            <a href="/Contact">Contact Me</a>
          </li>
          <li className="list-none px-4 py-2 lg:py-0 text-white hover:text-purple-300">
            <a href="/Project">Project</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
