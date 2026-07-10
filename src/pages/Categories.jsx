import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import "./Categories.css";

function Categories() {
  const [search, setSearch] =useState("");
  const [category, setCategory] =useState("All");
  const [sort, setSort] =useState("");

  let filtered = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    return matchName && matchCategory;
  });

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="categories-page">

      <h1>Shop Products</h1>

      <div className="filter-bar">

        <input
          placeholder="Search Product..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Groceries</option>
          <option>Dairy</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Snacks</option>
          <option>Beverages</option>
        </select>

        <select
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">
            Price Low → High
          </option>
          <option value="high">
            Price High → Low
          </option>
        </select>

      </div>

      <div className="product-grid">
        {filtered.map((product)=>(
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Categories;