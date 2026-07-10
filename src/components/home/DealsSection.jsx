import "./DealsSection.css";

function DealsSection() {
  const deals = [
    {
      title: "Fresh Fruits",
      offer: "Up to 40% OFF",
      emoji: "🍎",
      color: "#ef4444",
    },
    {
      title: "Vegetables",
      offer: "Buy 2 Get 1",
      emoji: "🥦",
      color: "#22c55e",
    },
    {
      title: "Dairy Products",
      offer: "Flat ₹100 OFF",
      emoji: "🥛",
      color: "#3b82f6",
    },
    {
      title: "Free Delivery",
      offer: "Orders Above ₹499",
      emoji: "🚚",
      color: "#f59e0b",
    },
  ];

  return (
    <section className="deals-section">
      <div className="container">
        <h2>⚡ Today's Best Deals</h2>

        <div className="deals-grid">
          {deals.map((deal) => (
            <div
              className="deal-card"
              key={deal.title}
              style={{ borderTop: `5px solid ${deal.color}` }}
            >
              <div className="deal-emoji">
                {deal.emoji}
              </div>

              <h3>{deal.title}</h3>

              <p>{deal.offer}</p>

              <button>Claim Offer</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DealsSection;