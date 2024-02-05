import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-evenly items-center py-8 container mx-auto gap-5 lg:gap-0 ">
      <h2 className="text-4xl font-semibold hover:text-gray-500 duration-300">
        <NavLink to={'/'}>Food Recipe</NavLink>
      </h2>
      <ul className="flex gap-5">
        <li className="nav-link">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
