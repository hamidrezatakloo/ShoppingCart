import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = (props) => {
  return (
    <nav className="grid grid-cols-12 w-11/12 mx-auto my-8 text-black items-center">
      <Link to="." className="font-[Monoton] text-3xl col-span-3">
        Figure
      </Link>
      <HamburgerMenu />
      <Link
        to="."
        className="font-[Poppins] col-span-2 text-xl hidden md:block hover:font-bold hover:scale-110 transition-all text-center hover:border-x-2 border-black"
      >
        Home
      </Link>
      <Link
        to="/Store"
        className="font-[Poppins] col-span-2 text-xl hidden md:block hover:font-bold hover:scale-110 transition-all text-center hover:border-x-2 border-black"
      >
        Store
      </Link>
      <Link
        to="/About"
        className="font-[Poppins] col-span-2 text-xl hidden md:block hover:font-bold hover:scale-110 transition-all text-center hover:border-x-2 border-black"
      >
        About
      </Link>
      <Link
        to="/Payment"
        className="font-[Poppins] md:col-start-11 col-span-2 text-xl  relative hover:scale-110 transition-all"
      >
        <img alt="shoppingCart" src="./shoppingCart.svg" />
        <span
          className="rounded-full inline-block w-[30px] h-[30px] bg-green-400 flex items-center justify-center text-white font-bold
         absolute left-[60px] top-2 p-2"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          {props.badges}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
