import { SWIGGY_URL } from "../../config";

const ItemCard = ({ itemInfo = {} }) => {
  const price = itemInfo.price / 100;
  return (
    <div className="menu-card">
      <div className="item-details">
        <h3>{itemInfo.name}</h3>
        <h5> ₹ {price}</h5>
        <h5>{itemInfo.description}</h5>
      </div>
      <div className="right-part">
        <img
          src={SWIGGY_URL + itemInfo.imageId}
          alt="food"
          className="card-image"
        />
        <button className="cart-button">Add to Cart </button>
      </div>
    </div>
  );
};

export default ItemCard;
