import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12 w-11/12 mx-auto my-8 text-black items-center">
      <Link to="." className="font-[Monoton] text-3xl col-span-4">
        Figure
      </Link>
      <HamburgerMenu />
      <Link
        to="."
        className="font-[Poppins] col-span-2 text-xl hidden md:block"
      >
        Home
      </Link>
      <Link
        to="/Store"
        className="font-[Poppins] col-span-2 text-xl hidden md:block"
      >
        Store
      </Link>
      <Link
        to="/About"
        className="font-[Poppins] col-span-2 text-xl hidden md:block"
      >
        About
      </Link>
      <Link
        to="/payment"
        className="font-[Poppins] col-span-2 text-xl hidden md:block relative"
      >
        <img alt="shoppingCart" src="./shoppingCart.svg" />
        <span
          className="rounded-full inline-block w-[30px] h-[30px] bg-green-400 flex items-center justify-center text-white font-bold
         absolute left-[50px] top-2 p-2"
        >
          0
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
