import { useParams } from "react-router-dom";
import products from "../data/products";

function Product() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found.</h2>;
  }

  const bestStore = [...product.stores].sort(
    (a, b) => a.price - b.price
  )[0];

  return (
    <div className="product-page">
      <div className="product-details">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="product-info">

          <h1>{product.name}</h1>

          <p>{product.qty}</p>

          <h2>Compare Prices</h2>

          <table>

            <thead>
              <tr>
                <th>Store</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {product.stores.map((store) => (

                <tr key={store.name}>

                  <td>{store.name}</td>

                  <td>₹{store.price}</td>

                  <td>

                    <a
                      href={store.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>

                        {store.price === bestStore.price
                          ? "Best Deal"
                          : "Visit"}

                      </button>

                    </a>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Product;