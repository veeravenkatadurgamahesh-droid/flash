import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { uploadImage } from "../firebase/storageService";
import {
  getProductById,
  updateProduct,
} from "../firebase/productService";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    try {
      const product = await getProductById(id);

      if (!product) {
        alert("Product not found");
        return;
      }

      setName(product.name || "");
      setCategory(product.category || "");
      setQty(product.qty || "");
      setPrice(product.price || "");
      setImage(product.image || "");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let imageUrl = image;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await updateProduct(id, {
        name,
        category,
        qty,
        price: Number(price),
        image: imageUrl,
      });

      alert("Product updated successfully!");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Product</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />

        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          placeholder="Quantity"
          required
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />

        {image && (
          <img
            src={image}
            alt="Product"
            width="120"
            style={{
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <button type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;