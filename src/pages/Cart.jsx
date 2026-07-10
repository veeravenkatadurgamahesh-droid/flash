import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="empty-page">
        <div className="empty-icon">🛒</div>

        <h2>Your Cart is Empty</h2>

        <p>
          Start shopping to compare grocery prices.
        </p>

        <Link to="/">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
          />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <p>{item.qty}</p>

            <p>₹{item.price}</p>

            <div className="qty-box">
              <button
                onClick={() => decreaseQty(item.id)}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            🗑 Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <h2>Total: ₹{total}</h2>

        <Link to="/compare-basket">
          <button className="checkout-btn">
            Compare Basket Prices
          </button>
        </Link>

        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;