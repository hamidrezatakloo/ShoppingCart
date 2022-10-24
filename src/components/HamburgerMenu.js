const HamburgerMenu = () => {
  return (
    <button className=" h-10 bg-primary col-start-11 min-w-[50px] sm:col-start-12 md:hidden flex flex-col items-center justify-center rounded ">
      <div className="w-8/12 bg-white h-[2px] m-1"></div>
      <div className="w-8/12 bg-white h-[2px] m-1"></div>
      <div className="w-8/12 bg-white h-[2px] m-1"></div>
    </button>
  );
};

export default HamburgerMenu;
