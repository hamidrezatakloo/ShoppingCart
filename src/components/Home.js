const Home = () => {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto">
      <h1 className="col-span-6 font-PassionOne  capitalize md:text-[50px] text-[13vw] lg:text-[70px] xl:text-[80px] 2xl:text-[96px]">
        Buy your favorite character action figures here
      </h1>
      <img
        alt="ActionFigure"
        src="./kakashi_LEE.webp"
        className="col-start-7 col-span-6 "
      />
    </div>
  );
};

export default Home;
