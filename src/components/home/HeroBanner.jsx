import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Compare Grocery Prices in Seconds</h1>

        <p>
          Find the lowest prices from Blinkit, Instamart,
          JioMart, BigBasket and Amazon Fresh.
        </p>

        <button onClick={() => navigate("/categories")}>
          Compare Now
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;