import "./Coupons.css";

const coupons = [
  {
    code: "FLASH50",
    discount: "₹50 OFF",
    minOrder: "₹500",
  },
  {
    code: "SAVE10",
    discount: "10% OFF",
    minOrder: "₹1000",
  },
  {
    code: "FREEDEL",
    discount: "Free Delivery",
    minOrder: "₹299",
  },
];

function Coupons() {
  return (
    <div className="coupons-page">
      <h1>Available Coupons</h1>

      <div className="coupon-grid">
        {coupons.map((coupon) => (
          <div className="coupon-card" key={coupon.code}>
            <h2>{coupon.discount}</h2>

            <h3>{coupon.code}</h3>

            <p>Minimum Order: {coupon.minOrder}</p>

            <button>Apply Coupon</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coupons;