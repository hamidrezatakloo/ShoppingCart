import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto flex-1 md:content-center">
      <h1 className="col-span-12 md:col-span-6 font-PassionOne  capitalize md:text-[50px] text-[13vw] lg:text-[70px] xl:text-[80px] 2xl:text-[96px]">
        Buy your favorite character action figures here
      </h1>
      <img
        alt="ActionFigure"
        src="./kakashi_LEE.webp"
        className="hidden md:block col-start-7 col-span-6 "
      />
      <Link
        to="/store"
        className="self-start capitalize text-white bg-black py-4 px-8 w-fit whitespace-nowrap rounded text-lg font-semibold font-[Poppins]"
      >
        go to store
      </Link>
    </div>
  );
};

export default Home;
