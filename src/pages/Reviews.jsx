import "./Reviews.css";

const reviews = [
  {
    id: 1,
    user: "Rahul",
    rating: 5,
    comment: "Great app! Found the cheapest grocery prices.",
  },
  {
    id: 2,
    user: "Priya",
    rating: 4,
    comment: "Easy to compare prices across stores.",
  },
  {
    id: 3,
    user: "Arjun",
    rating: 5,
    comment: "Loved the clean design and fast search.",
  },
];

function Reviews() {
  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>

      {reviews.map((review) => (
        <div className="review-card" key={review.id}>
          <h3>{review.user}</h3>
          <p>{"⭐".repeat(review.rating)}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;