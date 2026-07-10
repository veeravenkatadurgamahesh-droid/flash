import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">🏠<span>Home</span></Link>

      <Link to="/categories">📂<span>Categories</span></Link>

      <Link to="/cart">🛒<span>Cart</span></Link>

      <Link to="/profile">👤<span>Profile</span></Link>
    </nav>
  );
}

export default BottomNav;