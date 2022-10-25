import { Fragment, useState } from "react";
import OverLayer from "./OverLayerMenu";
const HamburgerMenu = () => {
  const [click, setClick] = useState(false);
  return (
    <Fragment>
      <button
        className=" h-10 bg-black col-start-11 min-w-[50px] sm:col-start-12 md:hidden flex flex-col items-center justify-center rounded "
        onClick={() => setClick(true)}
      >
        <div className="w-8/12 bg-white h-[2px] m-1"></div>
        <div className="w-8/12 bg-white h-[2px] m-1"></div>
        <div className="w-8/12 bg-white h-[2px] m-1"></div>
      </button>
      {<OverLayer setClick={setClick} click={click} />}
    </Fragment>
  );
};

export default HamburgerMenu;
