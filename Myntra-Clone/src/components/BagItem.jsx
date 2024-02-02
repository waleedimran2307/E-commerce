import { FiDelete } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

const BagItem = ({ items }) => {
  const dispatch = useDispatch();

  // remove Button
  const handleremove = () => {
    dispatch(bagActions.removeFromBag(items.id));
  };
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={items.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{items.company}</div>
        <div className="item-name">{items.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {items.current_price}</span>
          <span className="original-price">Rs {items.original_price}</span>
          <span className="discount-percentage">
            ({items.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{items.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{items.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleremove}>
        <FiDelete />
      </div>
    </div>
  );
};

export default BagItem;
