import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

function FlashDeals() {
  const deals = products.filter(
    (product) =>
      product.oldPrice &&
      product.oldPrice > product.price
  );

  return (
    <section className="flash-deals">

      <div className="section-header">
        <h2>⚡ Flash Deals</h2>
        <button>View All</button>
      </div>

      <div className="deal-banner">
        <h3>🔥 Deal of the Day</h3>

        <p>Save up to 50% on selected groceries.</p>
      </div>

      <div className="product-grid">
        {deals.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default FlashDeals;