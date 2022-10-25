const Card = ({ src, title, price }) => {
  return (
    <div className="col-span-4">
      <img alt={title} src={src} />
      <h2 className="font-PassionOne">{title}</h2>
      <div>{price}</div>
      <button>Add To Card</button>
    </div>
  );
};

export default Card;
