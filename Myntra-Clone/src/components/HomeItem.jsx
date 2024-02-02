import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const bagSlice = useSelector((store) => store.bagslice);
  const dispatch = useDispatch();

  const ElementFind = bagSlice.indexOf(item.id) >= 0;

  // add to bag button
  const handleAddToBag = () => {
    dispatch(bagActions.addfromBag(item.id));
  };

  // remove button
  const handleRemoveToBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name"> {item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {!ElementFind ? (
        <button
          className="btn-add-bag btn btn-success text-dark"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      ) : (
        <button
          className=" btn btn-danger text-dark btn-add-bag"
          onClick={handleRemoveToBag}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default HomeItem;
