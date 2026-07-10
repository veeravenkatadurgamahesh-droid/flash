import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../firebase/productService";

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id)
      );

      alert("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product.");
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Products</h1>

        <Link to="/admin/add">
          <button>Add Product</button>
        </Link>
      </div>

      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="60"
                  height="60"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>{product.qty}</td>

              <td>₹{product.price}</td>

              <td>
                <Link to={`/admin/edit/${product.id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => handleDelete(product.id)}
                  style={{
                    marginLeft: "10px",
                    background: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;