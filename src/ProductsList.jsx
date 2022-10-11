import productListJSON from "./JSONdata/products.json";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const productslist = productListJSON.products;
  console.log("Product List");
  return (
    <>
      {productslist.map((value, key) => {
        return <ProductCard key={key} {...value}></ProductCard>;
      })}
    </>
  );
};

export default ProductList;
