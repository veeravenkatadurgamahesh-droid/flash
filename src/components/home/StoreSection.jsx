function StoreSection() {
  const stores = [
    {
      name: "Blinkit",
      logo: "🟡",
    },
    {
      name: "Zepto",
      logo: "🟣",
    },
    {
      name: "Instamart",
      logo: "🟢",
    },
    {
      name: "JioMart",
      logo: "🔵",
    },
    {
      name: "BigBasket",
      logo: "🟩",
    },
    {
      name: "Amazon Fresh",
      logo: "🟠",
    },
  ];

  return (
    <section className="stores">
      <h2>🏪 Compare Across Stores</h2>

      <div className="store-grid">
        {stores.map((store) => (
          <div className="store-card" key={store.name}>
            <div className="store-logo">
              {store.logo}
            </div>

            <h3>{store.name}</h3>

            <button className="store-btn">
              Compare Prices
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoreSection;