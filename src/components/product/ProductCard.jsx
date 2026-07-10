import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductCard.css";

function ProductCard({ product }) {

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const liked = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-link"
    >
      <div className="product-card">

     <div className="product-image-wrapper">

  <img
    src={product.image}
    alt={product.name}
    className="product-image"
  />

</div>

        <div className="product-content">

          <span className="product-category">
            {product.category}
          </span>

          <h3>{product.name}</h3>

          <p className="product-qty">
            {product.qty}
          </p>

          <div className="price-row">

            <span className="price">
              ₹{product.price}
            </span>

            <span className="old-price">
              ₹{product.oldPrice}
            </span>

          </div>
<div className="rating-row">

  <div className="rating">
    ⭐⭐⭐⭐ {product.rating || 4.8}
  </div>

  <button
    className={`small-heart ${liked ? "active" : ""}`}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();

      if (liked) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }}
  >
    {liked ? "❤️" : "🤍"}
  </button>

</div>
        </div>

      </div>
    </Link>
  );
}

export default ProductCard;