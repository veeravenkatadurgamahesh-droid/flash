import "./Addresses.css";

const addresses = [
  {
    id: 1,
    name: "Home",
    person: "Mahesh",
    phone: "+91 9876543210",
    address:
      "12-34, MG Road, Hyderabad, Telangana - 500001",
  },
  {
    id: 2,
    name: "Office",
    person: "Mahesh",
    phone: "+91 9876543210",
    address:
      "Hitech City, Hyderabad, Telangana - 500081",
  },
];

function Addresses() {
  return (
    <div className="addresses-page">
      <div className="addresses-header">
        <h1>Saved Addresses</h1>

        <button>Add Address</button>
      </div>

      {addresses.map((item) => (
        <div className="address-card" key={item.id}>
          <h3>{item.name}</h3>

          <p><strong>{item.person}</strong></p>

          <p>{item.phone}</p>

          <p>{item.address}</p>

          <div className="address-actions">
            <button>Edit</button>
            <button className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Addresses;