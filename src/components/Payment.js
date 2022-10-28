import Item from "./Item";
const Payment = ({ shops }) => {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto gap-[20px] flex-1 items-start">
      {shops.map((it, i) => (
        <Item
          key={i}
          src={it.src}
          title={it.title}
          price={it.price}
          number={it.number}
        />
      ))}
    </div>
  );
};

export default Payment;
