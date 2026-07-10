import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <h2>No products in Wishlist ❤️</h2>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlist.map((item) => (
        <div
          className="wishlist-item"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>

            <p>{item.qty}</p>

            <h2>₹{item.price}</h2>
          </div>

          <button
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              removeFromWishlist(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;