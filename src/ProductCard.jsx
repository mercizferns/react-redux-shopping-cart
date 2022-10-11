import { useDispatch } from "react-redux";

const ProductCard = ({ name, imgURL, cost }) => {
  console.log("Product Card");

  const dispatch = useDispatch();

  const handleClick = () => {
    const product = { name, cost };
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div className="productCard roundedborder floatLeft">
      <div className="clearBoth">
        <img src={imgURL} alt={"Image of " + name} width="200" height="200" />
      </div>
      <div className="floatLeft">
        <span>{name}</span>
      </div>
      <div className="floatRight">
        <span>Price: {cost}</span>
      </div>
      <div className="clearBoth">
        <button
          id="addToCart"
          className="customBtn greenBtn"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
