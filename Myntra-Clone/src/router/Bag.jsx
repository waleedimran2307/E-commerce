import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.item);
  const bagList = useSelector((store) => store.bagslice);

  const finalItemsBag = items.filter((item) => {
    const itemIndex = bagList.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItemsBag.map((items) => (
            <BagItem key={items.id} items={items} />
          ))}
        </div>
        <BagSummary items = {items}/>
      </div>
    </main>
  );
};

export default Bag;
