import React from 'react';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-around items-center">
      <img src="https://i.pinimg.com/564x/31/78/e1/3178e1f2e4238f1972c9fbffe5ee3d9d.jpg" alt="logo" className="h-9" />

      <NavLink
        to="/Home"
        className="text-black font-semibold no-underline hover:text-gray-600"
        activeClassName="text-blue-500"
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className="text-black font-semibold no-underline hover:text-gray-600"
        activeClassName="text-blue-500"
      >
        About
      </NavLink>
      <NavLink
        to="/whoami"
        className="text-black font-semibold no-underline hover:text-gray-600"
        activeClassName="text-blue-500"
      >
        Who Am I
      </NavLink>
      <NavLink
        to="/contact-us"
        className="text-black font-semibold no-underline hover:text-gray-600"
        activeClassName="text-blue-500"
      >
        Contact Us
      </NavLink>
    </nav>
  );
};

export default Navbar;

