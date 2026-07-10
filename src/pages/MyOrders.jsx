import "./Orders.css";

const orders = [
  {
    id: "FLASH1001",
    date: "02 Jul 2026",
    total: 1245,
    status: "Delivered",
  },
  {
    id: "FLASH1002",
    date: "30 Jun 2026",
    total: 860,
    status: "Processing",
  },
  {
    id: "FLASH1003",
    date: "25 Jun 2026",
    total: 540,
    status: "Cancelled",
  },
];

function Orders() {
  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <div>
            <h3>{order.id}</h3>
            <p>{order.date}</p>
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