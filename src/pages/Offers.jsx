import "./Offers.css";

const offers = [
  {
    id: 1,
    title: "50% OFF",
    description: "Get up to 50% off on Grocery Items",
    color: "#22c55e",
  },
  {
    id: 2,
    title: "Buy 1 Get 1",
    description: "Available on Snacks",
    color: "#2563eb",
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "On Orders Above ₹499",
    color: "#f97316",
  },
  {
    id: 4,
    title: "Cashback ₹100",
    description: "Pay using UPI",
    color: "#dc2626",
  },
];

function Offers() {
  return (
    <div className="offers-page">
      <h1>Today's Offers</h1>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="offer-card"
            style={{ borderTop: `6px solid ${offer.color}` }}
          >
            <h2>{offer.title}</h2>

            <p>{offer.description}</p>

            <button>Claim Offer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;