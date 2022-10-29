const Item = ({ src, title, price, number, shops, setShops, setBadges }) => {
  const AddItem = () => {
    const update = shops.map((sh) => {
      if (sh.title === title) sh.number += 1;
      return sh;
    });
    setBadges((prev) => prev + 1);
    setShops(update);
  };

  const DeleteItem = () => {
    let update = shops.map((sh) => {
      if (sh.title === title) sh.number -= 1;
      return sh;
    });

    update = update.filter((sh) => sh.number > 0);

    setBadges((prev) => prev - 1);
    setShops(update);
  };

  return (
    <div className="col-span-12 flex items-center p-4  bg-primary text-white font-[Poppins] font-bold rounded flex-col lg:flex-row hover:opacity-90">
      <div className=" w-[300px] grid place-items-center shrink-0">
        <img alt="actionFigure" src={src} className="h-[300px]" />
      </div>
      <h4 className="text-4xl xl:text-5xl capitalize my-10 lg:my-0 text-center flex-1">
        {title}
      </h4>
      <p className="m-4 text-2xl text-yellow-300">${price}</p>
      <p className="m-4 text-2xl text-sky-200">
        Number:<span>&nbsp;{number}</span>
      </p>
      <div className="flex">
        <button
          className="text-2xl bg-red-500  active:animate-scaleUp text-center w-10 h-10 mx-2 shrink-0 rounded hover:border-2 hover:border-white transition-all"
          onClick={DeleteItem}
        >
          -
        </button>
        <button
          className="text-2xl bg-emerald-500 active:animate-scaleUp text-center w-10 h-10 mx-2 shrink-0 rounded hover:border-2 hover:border-white transition-all"
          onClick={AddItem}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
