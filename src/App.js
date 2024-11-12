import "./App.css";
import ProductItem from "./Components/ProductItem";
import product from "./data/productMenu";
function App() {
  const productMenu = product.map((product, index) => {
    return <ProductItem myproduct={product} />;
  });

  return (
    <div className="App">
      <h1>Sweetie Bakery</h1>
      <p>Where Every Bite is an Event!</p>
      <img
        className="Bakery-Image"
        src="https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x847_crop_center-center_82_line/open-a-bakery-header.jpg"
      ></img>
      <div className="product-Menu">{productMenu}</div>
    </div>
  );
}

export default App;
