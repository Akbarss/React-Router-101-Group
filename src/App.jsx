import Cart from "./components/Cart/Cart";
import ProductCard from "./components/Cart/ProductCard";
import Layout from "./components/layout";
import ThemeDisplay from "./components/theme/ThemeDisplay";
import ThemeToggle from "./components/theme/ThemeToggle";

function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <>
      <Layout>
        <ThemeDisplay />
        <ThemeToggle />

        <div style={{ padding: "20px" }}>
          <h1>Product List</h1>
          <div style={{ display: "flex", gap: "16px" }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Cart />
        </div>
      </Layout>
    </>
  );
}

export default App;
