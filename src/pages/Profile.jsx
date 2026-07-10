import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="avatar">
          👤
        </div>

        <h2>Welcome, Mahesh</h2>

        <p>mahesh@gmail.com</p>

      </div>

      <div className="profile-menu">

        <Link to="/orders">
          📦 My Orders
        </Link>

        <Link to="/wishlist">
          ❤️ Wishlist
        </Link>

        <Link to="/addresses">
          📍 Addresses
        </Link>

        <Link to="/coupons">
          🎁 Coupons
        </Link>

        <Link to="/notifications">
          🔔 Notifications
        </Link>

        <Link to="/settings">
          ⚙️ Settings
        </Link>

        <Link to="/support">
          💬 Help & Support
        </Link>

      </div>

    </div>
  );
}

export default Profile;