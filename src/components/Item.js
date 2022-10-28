const Item = ({ src, title, price, number }) => {
  return (
    <div className="col-span-12 flex items-center p-4 justify-around bg-primary text-white font-[Poppins] font-bold rounded">
      <img alt="actionFigure" src={src} className="w-[100px] mx-4" />
      <h4 className="px-4 text-5xl capitalize">{title}</h4>
      <p className="px-4 text-2xl">{price}</p>
      <p className="px-4 text-2xl">
        Number:<span>&nbsp;{number}</span>
      </p>
      <button className="text-2xl bg-red-500 text-center w-8 h-8 mx-2 shrink-0 rounded">
        -
      </button>
      <button className="text-2xl bg-emerald-500 text-center w-8 h-8 mx-2 shrink-0 rounded">
        +
      </button>
    </div>
  );
};

export default Item;
