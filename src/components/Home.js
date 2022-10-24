import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto flex-1 md:content-center md:gap-y-[100px] 2xl:gap-y-px">
      <h1
        className="self-center text-center sm:text-left col-span-12 md:col-span-6 font-PassionOne bg-primary bg-clip-text text-transparent md:text-black md:bg-none md:bg-clip-border 
      capitalize md:text-[50px] text-[13vw] lg:text-[70px] xl:text-[80px] 2xl:text-[96px]"
      >
        Buy your favorite character action figures here
      </h1>
      <img
        alt="ActionFigure"
        src="./kakashi_LEE.webp"
        className="hidden md:block col-start-7 col-span-6 "
      />
      <Link
        to="/store"
        className="self-start capitalize bg-primary text-white py-4 px-8 w-fit whitespace-nowrap rounded text-lg font-semibold font-[Poppins]
         md:bg-none md:bg-black"
      >
        go to store
      </Link>
    </div>
  );
};

export default Home;
