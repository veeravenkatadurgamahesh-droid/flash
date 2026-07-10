import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./ComparePrices.css";

function ComparePrices() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const cheapest = [...product.stores].sort(
    (a, b) => a.price - b.price
  )[0];

  return (
    <div className="compare-page">

      <h1>Compare Prices</h1>

      <div className="compare-product">

        <img
          src={product.image}
          alt={product.name}
        />

        <div>
          <h2>{product.name}</h2>
          <p>{product.qty}</p>
        </div>

      </div>

      <div className="store-list">

        {product.stores.map((store) => {

          const save =
            store.price - cheapest.price;

          return (
            <div
              className={`store-card ${
                store.name === cheapest.name
                  ? "best-store"
                  : ""
              }`}
              key={store.name}
            >

              <div>
                <h3>{store.name}</h3>

                <p>
                  Delivery: 10-20 mins
                </p>
              </div>

              <div>

                <h2>
                  ₹{store.price}
                </h2>

                {save > 0 && (
                  <p className="save">
                    ₹{save} more
                  </p>
                )}

              </div>

            </div>
          );
        })}

      </div>

      <div className="winner">

        <h2>
          🏆 Best Deal
        </h2>

        <h1>{cheapest.name}</h1>

        <h3>
          ₹{cheapest.price}
        </h3>

        <button>
          Buy from {cheapest.name}
        </button>

      </div>

    </div>
  );
}

export default ComparePrices;