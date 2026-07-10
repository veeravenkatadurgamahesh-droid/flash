import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../hooks/useAuth";
import { placeOrder } from "../firebase/orderService";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function handlePlaceOrder() {
    if (!user) {
      alert("Please login first.");
      return;
    }

    try {
      await placeOrder(user.uid, {
        items: cart,
        total,
      });

      alert("Order placed successfully!");

      navigate("/order-success");
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <div className="address-box">
          <h2>Delivery Address</h2>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="House No / Flat" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Pincode" />

          <button>Save Address</button>
        </div>

        <div className="summary-box">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <hr />

          <h3>Total: ₹{total}</h3>

          <button
            className="pay-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;