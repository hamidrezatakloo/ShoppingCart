const Card = ({ src, title, price }) => {
  return (
    <div className="col-span-12  sm:col-span-6 md:col-span-6 lg:col-span-4 flex flex-col items-center justify-between border-1 border-gray-200 shadow-md">
      <img alt={title} src={src} className="h-[400px] xl:h-[500px]" />
      <h2 className="font-PassionOne text-4xl text-center w-10/12 my-2 uppercase">
        {title}
      </h2>
      <p className="text-rose-800 text-3xl font-Poppins my-4">
        <sup>$</sup>
        {price}
      </p>
      <button className="bg-emerald-500 py-2 px-8 text-white font-Poppins text-lg font-bold my-4">
        Add To Card
      </button>
    </div>
  );
};

export default Card;
