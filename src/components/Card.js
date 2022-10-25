const Card = ({ src, title, price }) => {
  return (
    <div className="col-span-4">
      <img alt={title} src={src} />
      <h2 className="font-PassionOne text-4xl">{title}</h2>
      <p className="text-rose-800 text-3xl font-Poppins">
        <sup>$</sup>
        {price}
      </p>
      <button className="bg-emerald-500 py-2 px-8">Add To Card</button>
    </div>
  );
};

export default Card;
