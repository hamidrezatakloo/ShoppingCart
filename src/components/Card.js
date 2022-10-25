const Card = ({ src, title, price }) => {
  return (
    <div className="col-span-4">
      <img alt={title} src={src} />
      <h2 className="font-PassionOne text-4xl">{title}</h2>
      <p className="text-rose-800 text-3xl font-Poppins">{price}</p>
      <button>Add To Card</button>
    </div>
  );
};

export default Card;
