import Card from "./Card";
import data from "./../data.json";

const Store = () => {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto gap-[20px] flex-1">
      {data.map((d, i) => (
        <Card key={i} src={d.src} title={d.title} price={d.price} />
      ))}
    </div>
  );
};

export default Store;
