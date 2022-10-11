import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  console.log("Header");

  const cart = useSelector((state) => state);
  let totalproducts = cart.productlist;
  console.log(totalproducts);
  return (
    <ul>
      {totalproducts.map(({ name, cost }, index) => (
        <li key={"cart_item_" + index}>
          {name}: Price {cost}
        </li>
      ))}
    </ul>
  );
};

export default Header;
