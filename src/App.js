import "./App.css";
import ProductItem from "./Components/ProductItem";
function App() {
  const products = [
    {
      name: "Apple Pie",
      price: "15KD",
      Image:
        "https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-featured-1-2.jpg",
    },
    {
      name: "Red Velvet",
      price: "25KD",
      Image:
        "https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Recipe-Card-1a.jpg",
    },
    {
      name: "chocolate croissant",
      price: "7KD",
      Image:
        "https://thecozyapron.com/wp-content/uploads/2024/02/easy-chocolate-croissants_thecozyapron_1.jpg",
    },
  ];

  const productMenu = products.map((product, index) => {
    return <ProductItem />;
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
