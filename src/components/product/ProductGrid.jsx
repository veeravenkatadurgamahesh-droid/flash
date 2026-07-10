import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import "./ProductGrid.css";

function ProductGrid() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredProducts =
    category === "All"
      ? [...products]
      : products.filter(
          (p) => p.category === category
        );

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <section className="products-section">

      <div className="section-header">
        <h2>🔥 Trending Products</h2>
      </div>

      <div className="filters">

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Groceries</option>
          <option>Dairy</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Beverages</option>
          <option>Snacks</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Sort By
          </option>

          <option value="low">
            Lowest Price
          </option>

          <option value="high">
            Highest Price
          </option>

        </select>

      </div>

      <div className="product-grid">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;