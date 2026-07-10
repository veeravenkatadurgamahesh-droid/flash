import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with Flash.
          Your order has been placed successfully.
        </p>

        <h3>Order ID: #FLASH1024</h3>

        <div className="success-buttons">
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>

          <Link to="/orders">
            <button className="secondary">
              View Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;