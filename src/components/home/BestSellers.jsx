import ProductGrid from "../product/ProductGrid";

function BestSellers() {
  return (
    <section className="best-sellers">
      <div className="section-header">
        <h2>⭐ Best Sellers</h2>
        <button className="view-all-btn">
          View All
        </button>
      </div>

      <ProductGrid />
    </section>
  );
}

export default BestSellers;