import { useCart } from "../context/CartContext";
import "./CompareBasket.css";

function CompareBasket() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="compare-basket">
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  const stores = [
    "Blinkit",
    "Zepto",
    "Instamart",
    "JioMart",
    "BigBasket",
    "Amazon Fresh",
  ];

  const totals = {};

  stores.forEach((store) => {
    totals[store] = 0;
  });

  cart.forEach((product) => {
    product.stores.forEach((store) => {
      totals[store.name] += store.price * product.quantity;
    });
  });

  const cheapestStore = Object.entries(totals).sort(
    (a, b) => a[1] - b[1]
  )[0];

  return (
    <div className="compare-basket">

      <h1>Compare Basket Prices</h1>

      <table>

        <thead>
          <tr>
            <th>Store</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>

          {stores.map((store) => (
            <tr key={store}>
              <td>{store}</td>
              <td>₹{totals[store]}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <div className="winner-card">

        <h2>🏆 Cheapest Basket</h2>

        <h1>{cheapestStore[0]}</h1>

        <h3>₹{cheapestStore[1]}</h3>

        <button>
          Buy from {cheapestStore[0]}
        </button>

      </div>

    </div>
  );
}

export default CompareBasket;