const Card = ({ src, title, price }) => {
  return (
    <div className="col-span-4">
      <img alt={title} src={src} />
      <h2 className="font-PassionOne text-4xl">{title}</h2>
      <div className="text-rose-800">{price}</div>
      <button>Add To Card</button>
    </div>
  );
};

export default Card;
