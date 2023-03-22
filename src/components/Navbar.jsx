import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS, adjust the path if necessary

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-around items-center">
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
    </nav>
  );
};

export default Navbar;
