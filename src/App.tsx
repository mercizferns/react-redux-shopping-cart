import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CartStore from "./CartStore";
import Cart from "./Cart";

import "./styles.css";
import ProductList from "./ProductsList";
import Header from "./Header";
console.log("Initial Cart State: ", CartStore.getState());
import "./customstyles.css";
import "./products.css";

export default function App() {
  return (
    <Provider store={CartStore}>
      <div className="App">
        <h1>Hello Shopper</h1>
        <h4>Let the shopping begin!</h4>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
