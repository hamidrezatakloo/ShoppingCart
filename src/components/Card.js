const Card = ({ src, title, price }) => {
  return (
    <div>
      <img alt={title} src={src} />
      <h2>{title}</h2>
      <div>{price}</div>
      <button>Add To Card</button>
    </div>
  );
};

export default Card;
