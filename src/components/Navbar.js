import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="grid grid-cols-12 w-11/12 mx-auto my-8 bg-primary bg-clip-text text-transparent 
    md:bg-none md:bg-clip-border md:text-black"
    >
      <Link to="." className="font-[Monoton] text-3xl col-span-4">
        Figure
      </Link>
      <Link to="." className="font-[Poppins] col-span-2 text-xl">
        Home
      </Link>
      <Link to="/Store" className="font-[Poppins] col-span-2 text-xl">
        Store
      </Link>
      <Link to="/About" className="font-[Poppins] col-span-2 text-xl">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
