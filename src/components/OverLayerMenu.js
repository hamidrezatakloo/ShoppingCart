import { Fragment } from "react";
import { Link } from "react-router-dom";
const OverLayer = ({ setClick }) => {
  return (
    <Fragment>
      <div className="absolute right-0 top-0 z-10 w-full h-full bg-gray-400 bg-opacity-40 md:hidden"></div>
      <div
        className="absolute right-0 top-0 z-20  h-full bg-white border-l-2 border-gray-100
      animate-drop flex flex-col justify-center gap-10 md:hidden overflow-hidden"
      >
        <button
          className="text-black text-5xl absolute right-4 top-4"
          onClick={() => setClick(false)}
        >
          &#215;
        </button>
        <Link
          to="."
          className="font-[Poppins]  text-2xl z-30 text-black block w-full text-center py-[40px] border-y-2 border-gray-200"
        >
          Home
        </Link>
        <Link
          to="/Store"
          className="font-[Poppins]  text-2xl z-30 text-black block w-full text-center py-[40px] border-y-2 border-gray-200"
        >
          Store
        </Link>
        <Link
          to="/About"
          className="font-[Poppins]  text-2xl z-30 text-black block w-full text-center py-[40px] border-y-2 border-gray-200"
        >
          About
        </Link>
      </div>
    </Fragment>
  );
};
export default OverLayer;
