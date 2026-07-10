import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

function SearchResults() {
  const { search } = useLocation();

  const query = new URLSearchParams(search)
    .get("q")
    ?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: "30px" }}>

      <h1>
        Search Results
      </h1>

      {filteredProducts.length === 0 ? (
        <h3>No products found.</h3>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default SearchResults;