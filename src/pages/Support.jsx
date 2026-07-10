import "./Support.css";

function Support() {
  return (
    <div className="support-page">
      <div className="support-card">
        <h1>Help & Support</h1>

        <div className="support-item">
          <h3>📞 Call Us</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="support-item">
          <h3>📧 Email</h3>
          <p>support@flashapp.com</p>
        </div>

        <div className="support-item">
          <h3>💬 Live Chat</h3>
          <button>Start Chat</button>
        </div>

        <div className="support-item">
          <h3>❓Frequently Asked Questions</h3>
          <ul>
            <li>How do I compare prices?</li>
            <li>How do I cancel an order?</li>
            <li>How do I update my address?</li>
            <li>How do I apply coupons?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;