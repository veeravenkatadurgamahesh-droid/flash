import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./Header.css";

function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">

      <Link to="/" className="logo">
        ⚡ Flash
      </Link>

      <div className="header-search">
       <input
  className="header-search"
  type="text"
  placeholder="Search groceries..."
/>
      </div>

      <nav className="nav">

        <Link to="/">Home</Link>

        <Link to="/categories">
          Categories
        </Link>

        <Link to="/offers">
          Offers
        </Link>

        <Link to="/wishlist">
          ❤️ {wishlist.length}
        </Link>

        <Link to="/cart">
          🛒 {cartCount}
        </Link>

        <Link to="/profile">
          👤
        </Link>

      </nav>

    </header>
  );
}

export default Header;