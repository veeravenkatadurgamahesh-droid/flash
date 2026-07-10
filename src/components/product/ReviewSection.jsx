import "./ReviewSection.css";

const reviews = [
  {
    id: 1,
    user: "Rahul",
    rating: 5,
    comment: "Excellent quality and fast delivery.",
  },
  {
    id: 2,
    user: "Priya",
    rating: 4,
    comment: "Fresh product. Worth the price.",
  },
  {
    id: 3,
    user: "Arjun",
    rating: 5,
    comment: "Best price compared to other apps.",
  },
];

function ReviewSection() {
  return (
    <section className="reviews-section">
      <h2>⭐ Customer Reviews</h2>

      {reviews.map((review) => (
        <div className="review-card" key={review.id}>
          <h3>{review.user}</h3>

          <p>{"⭐".repeat(review.rating)}</p>

          <p>{review.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default ReviewSection;