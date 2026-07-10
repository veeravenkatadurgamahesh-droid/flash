function Analytics() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Analytics</h1>

      <div className="cards">
        <div className="card">
          <h3>Today's Orders</h3>
          <h2>32</h2>
        </div>

        <div className="card">
          <h3>Today's Revenue</h3>
          <h2>₹24,500</h2>
        </div>

        <div className="card">
          <h3>New Users</h3>
          <h2>18</h2>
        </div>

        <div className="card">
          <h3>Products Sold</h3>
          <h2>214</h2>
        </div>
      </div>
    </div>
  );
}

export default Analytics;