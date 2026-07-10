import "./Notifications.css";

const notifications = [
  {
    id: 1,
    title: "Price Drop!",
    message: "Premium Rice is now ₹299 on Blinkit.",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "Order Delivered",
    message: "Your grocery order has been delivered.",
    time: "2 hours ago",
  },
  {
    id: 3,
    title: "New Coupon",
    message: "Use FLASH50 to save ₹50 today.",
    time: "Today",
  },
];

function Notifications() {
  return (
    <div className="notifications-page">
      <h1>Notifications</h1>

      {notifications.map((item) => (
        <div className="notification-card" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.message}</p>
          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
}

export default Notifications;