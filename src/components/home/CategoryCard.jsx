import { useNavigate } from "react-router-dom";

const categories = [
  "Groceries",
  "Dairy",
  "Fruits",
  "Vegetables",
  "Beverages",
  "Snacks",
];

function CategoryCard() {
  const navigate = useNavigate();

  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((item) => (
          <div
            key={item}
            className="category-card"
            onClick={() => navigate("/categories")}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCard;