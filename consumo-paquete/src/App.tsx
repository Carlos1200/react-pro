import {
  ProductCard,
  ProductTitle,
  ProductButtons,
  ProductImage,
} from "cdhg-product-card";
import "./App.css";

const producto = {
  id: "1",
  title: "Producto 1",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard product={producto}>
          {() => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </header>
    </div>
  );
}

export default App;
