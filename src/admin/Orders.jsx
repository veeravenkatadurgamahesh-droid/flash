import { useEffect, useState } from "react";
import "./Admin.css";

import { getOrders } from "../firebase/orderService";
import { useAuth } from "../hooks/useAuth";

function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const data = await getOrders(user.uid);
        setOrders(data);
      } catch (error) {
        console.error("Error loading orders:", error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="orders-page">
        <h2>Please login to view your orders.</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="orders-page">
        <h2>Loading orders...</h2>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <h2>No orders found.</h2>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <div>
            <h3>Order #{order.id}</h3>

            <p>
              {order.createdAt?.toDate
                ? order.createdAt.toDate().toLocaleDateString()
                : "Date unavailable"}
            </p>
          </div>

          <div>
            <h2>₹{order.total}</h2>
          </div>

          <div>
            <span className={order.status.toLowerCase()}>
              {order.status}
            </span>
          </div>

          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Orders;