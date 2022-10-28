const Item = ({ src, title, price, number }) => {
  return (
    <div className="col-span-12 flex items-center p-4  bg-primary text-white font-[Poppins] font-bold rounded flex-col lg:flex-row">
      <div className=" w-[300px] grid place-items-center shrink-0">
        <img alt="actionFigure" src={src} className="h-[300px]" />
      </div>
      <h4 className="text-4xl xl:text-5xl capitalize my-10 lg:my-0 text-center flex-1">
        {title}
      </h4>
      <p className="m-4 text-2xl">${price}</p>
      <p className="m-4 text-2xl">
        Number:<span>&nbsp;{number}</span>
      </p>
      <div className="flex">
        <button className="text-2xl bg-red-500 text-center w-8 h-8 mx-2 shrink-0 rounded">
          -
        </button>
        <button className="text-2xl bg-emerald-500 text-center w-8 h-8 mx-2 shrink-0 rounded">
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
