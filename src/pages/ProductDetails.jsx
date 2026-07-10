import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";
import ReviewSection from "../components/product/ReviewSection";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  const [liked, setLiked] = useState(false);

  const cheapestStore =
    product.stores?.length > 0
      ? [...product.stores].sort((a, b) => a.price - b.price)[0]
      : null;

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <div className="product-details">

      {/* LEFT SIDE */}

      <div className="product-image-section">

        <div className="gallery">

          <img
            src={selectedImage}
            alt={product.name}
            className="main-image"
          />

          <div className="thumbnail-row">
            {(product.images || [product.image]).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="thumbnail"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="product-info">

        <div className="product-top">

          <div className="rating">
            ⭐⭐⭐⭐⭐ {product.rating} ({product.reviews} Reviews)
          </div>

          <button
            className={`heart-btn ${liked ? "active" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? "❤️" : "🤍"}
          </button>

        </div>

        <span className="category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <p className="qty">
          {product.qty}
        </p>

        <div className="price-box">

          <span className="price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹{product.oldPrice}
          </span>

          {discount > 0 && (
            <span className="discount">
              {discount}% OFF
            </span>
          )}

        </div>

        <p className="stock">
          ✅ In Stock
        </p>

        <p className="delivery">
          🚚 Delivery in 10–20 mins
        </p>

        {/* BUTTONS */}

        <div className="buttons">

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
          >
            🛒 Add to Cart
          </button>

          <button
            className="compare-btn"
            onClick={() =>
              navigate(`/compare/${product.id}`)
            }
          >
            ⚖ Compare Prices
          </button>

        </div>

        {/* BEST PRICE */}

        {cheapestStore && (

          <div className="best-price-card">

            <h2>🏆 Best Price</h2>

            <h3>{cheapestStore.name}</h3>

            <p className="best-price">
              ₹{cheapestStore.price}
            </p>

            <button
              className="buy-btn"
              onClick={() =>
                alert(
                  `Redirecting to ${cheapestStore.name}...`
                )
              }
            >
              Buy from {cheapestStore.name}
            </button>

          </div>

        )}

        {/* PRICE COMPARISON */}

        {product.stores?.length > 0 && (

          <div className="compare-section">

            <h2>Compare Prices</h2>

            {product.stores.map((store) => (

              <div
                key={store.name}
                className="store-price"
              >
                <span>{store.name}</span>

                <strong>₹{store.price}</strong>

              </div>

            ))}

          </div>

        )}

        <ReviewSection />

      </div>

    </div>
  );
}

export default ProductDetails;