import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  console.log("Header");

  const cart = useSelector((state) => state);
  let totalproducts = cart.productlist.length;

  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/cart">Cart ({totalproducts})</Link>
    </div>
  );
};

export default Header;
