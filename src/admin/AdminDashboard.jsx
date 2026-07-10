import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const stats = [
    {
      title: "Products",
      value: 120,
      color: "#16a34a",
      link: "/admin/products",
    },
    {
      title: "Orders",
      value: 58,
      color: "#2563eb",
      link: "/admin/orders",
    },
    {
      title: "Users",
      value: 340,
      color: "#f97316",
      link: "/admin/users",
    },
    {
      title: "Revenue",
      value: "₹1.25L",
      color: "#dc2626",
      link: "/admin/analytics",
    },
  ];

  return (
    <div className="admin-page">

      <h1>⚡ Flash Admin Dashboard</h1>

      <div className="admin-grid">

        {stats.map((item) => (

          <Link
            to={item.link}
            className="admin-card"
            key={item.title}
          >

            <h2>{item.title}</h2>

            <h1
              style={{ color: item.color }}
            >
              {item.value}
            </h1>

          </Link>

        ))}

      </div>
<div className="quick-actions">

  <Link to="/admin/add-product">
    <button>Add Product</button>
  </Link>

  <Link to="/admin/products">
    <button>Manage Products</button>
  </Link>

  <Link to="/admin/orders">
    <button>Manage Orders</button>
  </Link>

</div>
    </div>
  );
}

export default AdminDashboard;