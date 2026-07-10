import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered =
    query === ""
      ? []
      : products.filter((product) =>
          product.name
            .toLowerCase()
            .includes(query.toLowerCase())
        );

  return (
    <div className="search-wrapper">

      <div className="search-box">

        <input
          type="text"
          placeholder="Search groceries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={() =>
            navigate(`/search?q=${query}`)
          }
        >
          Search
        </button>

      </div>

      {filtered.length > 0 && (

        <div className="search-results">

          {filtered.slice(0,5).map((product)=>(

            <div
              key={product.id}
              className="search-item"
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <span>{product.name}</span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default SearchBar;