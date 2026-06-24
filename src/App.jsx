import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [message, setMessage] = useState("");
  const [page, setPage] = useState("home");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("flash-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("flash-user-name") || "";
  });

  const [mobile, setMobile] = useState(() => {
    return localStorage.getItem("flash-mobile") || "";
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("flash-logged-in") === "true";
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("flash-orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("flash-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("flash-user-name", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("flash-mobile", mobile);
  }, [mobile]);

  useEffect(() => {
    localStorage.setItem("flash-logged-in", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("flash-orders", JSON.stringify(orders));
  }, [orders]);

  const products = [
    {
      id: 1,
      emoji: "🍚",
      name: "Premium Rice",
      category: "Groceries",
      qty: "5 kg",
      price: 320,
      oldPrice: 360,
      badge: "11% OFF",
    },
    {
      id: 2,
      emoji: "🥛",
      name: "Fresh Milk",
      category: "Dairy",
      qty: "1 litre",
      price: 60,
      oldPrice: 70,
      badge: "14% OFF",
    },
    {
      id: 3,
      emoji: "🍎",
      name: "Fresh Apples",
      category: "Fruits",
      qty: "1 kg",
      price: 150,
      oldPrice: 180,
      badge: "17% OFF",
    },
    {
      id: 4,
      emoji: "🥚",
      name: "Farm Eggs",
      category: "Dairy",
      qty: "12 pieces",
      price: 90,
      oldPrice: 110,
      badge: "18% OFF",
    },
    {
      id: 5,
      emoji: "🥬",
      name: "Fresh Spinach",
      category: "Vegetables",
      qty: "1 bunch",
      price: 25,
      oldPrice: 35,
      badge: "29% OFF",
    },
    {
      id: 6,
      emoji: "🍪",
      name: "Chocolate Cookies",
      category: "Snacks",
      qty: "200 g",
      price: 45,
      oldPrice: 55,
      badge: "18% OFF",
    },
  ];

  const categories = [
    { name: "All", emoji: "✨" },
    { name: "Fruits", emoji: "🍎" },
    { name: "Vegetables", emoji: "🥬" },
    { name: "Dairy", emoji: "🥛" },
    { name: "Groceries", emoji: "🛒" },
    { name: "Snacks", emoji: "🍪" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function showMessage(text) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2500);
  }

  function goToPage(newPage) {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addToCart(product) {
    setCart((oldCart) => {
      const exists = oldCart.find((item) => item.id === product.id);

      if (exists) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });

    showMessage(`${product.name} added to cart`);
  }

  function changeQuantity(productId, change) {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId) {
    setCart((oldCart) => oldCart.filter((item) => item.id !== productId));
    showMessage("Item removed from cart");
  }

  function openCategory(categoryName) {
    setActiveCategory(categoryName);
    goToPage("home");

    setTimeout(() => {
      document.getElementById("deals")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  }

  function placeOrder() {
    if (!isLoggedIn) {
      showMessage("Please login before checkout");
      goToPage("profile");
      return;
    }

    if (cart.length === 0) {
      showMessage("Your cart is empty");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cartTotal,
      date: new Date().toLocaleDateString("en-IN"),
      status: "Delivered",
    };

    setOrders((oldOrders) => [newOrder, ...oldOrders]);
    setCart([]);
    showMessage("Order placed successfully! 🎉");
    goToPage("orders");
  }

  function renderProductCard(product) {
    return (
      <article className="product-card" key={product.id}>
        <span className="product-badge">{product.badge}</span>

        <div className="product-image">{product.emoji}</div>

        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-qty">{product.qty}</p>

        <div className="price-row">
          <strong>₹{product.price}</strong>
          <span>₹{product.oldPrice}</span>
        </div>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </article>
    );
  }

  function renderHome() {
    return (
      <main className="main-content">
        <section className="search-section">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search groceries, fruits, dairy..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button className="clear-search" onClick={() => setSearch("")}>
              ×
            </button>
          )}
        </section>

        <section className="hero-card">
          <div>
            <span className="hero-tag">FLASH DEALS</span>

            <h2>Save more on your daily groceries</h2>

            <p>Find low prices, offers and fresh products near you.</p>

            <button
              className="deal-button"
              onClick={() =>
                document.getElementById("deals")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore Deals →
            </button>
          </div>

          <div className="hero-emoji">🛍️</div>
        </section>

        <section className="coupon-card">
          <div className="coupon-icon">🎟️</div>

          <div>
            <strong>Use code: FLASH50</strong>
            <p>Get ₹50 OFF on orders above ₹499</p>
          </div>

          <button
            onClick={() => {
              navigator.clipboard?.writeText("FLASH50");
              showMessage("Coupon FLASH50 copied");
            }}
          >
            Copy
          </button>
        </section>

        <section>
          <div className="section-heading">
            <div>
              <h2>Shop by category</h2>
              <p>Choose what you need today</p>
            </div>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`category ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() => openCategory(category.name)}
              >
                <span>{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        <section id="deals">
          <div className="section-heading deals-heading">
            <div>
              <h2>🔥 Lowest prices</h2>
              <p>{filteredProducts.length} products available</p>
            </div>

            <button
              className="view-all"
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
            >
              View all
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(renderProductCard)}
            </div>
          ) : (
            <div className="empty-state">
              <div>🔎</div>
              <h3>No products found</h3>
              <p>Try another product name or category.</p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>
    );
  }

  function renderCategories() {
    return (
      <main className="main-content">
        <div className="section-heading">
          <div>
            <h2>📂 Categories</h2>
            <p>Choose a category to see products</p>
          </div>
        </div>

        <div className="categories-page-grid">
          {categories.slice(1).map((category) => (
            <button
              className="category-page-card"
              key={category.name}
              onClick={() => openCategory(category.name)}
            >
              <span>{category.emoji}</span>
              <strong>{category.name}</strong>
              <small>Shop now →</small>
            </button>
          ))}
        </div>
      </main>
    );
  }

  function renderSearch() {
    return (
      <main className="main-content">
        <div className="section-heading">
          <div>
            <h2>🔍 Search products</h2>
            <p>Find groceries and deals quickly</p>
          </div>
        </div>

        <section className="search-section search-page-input">
          <span>🔍</span>

          <input
            autoFocus
            type="text"
            placeholder="Type product name..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </section>

        <div className="product-grid">
          {filteredProducts.map(renderProductCard)}
        </div>
      </main>
    );
  }

  function renderCart() {
    return (
      <main className="main-content">
        <div className="section-heading">
          <div>
            <h2>🛒 Your Cart</h2>
            <p>{cartItemCount} item(s) in your cart</p>
          </div>

          <button className="view-all" onClick={() => goToPage("home")}>
            Continue shopping
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <div>🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add products from Flash deals and they will appear here.</p>

            <button onClick={() => goToPage("home")}>Start shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <article className="cart-row" key={item.id}>
                  <div className="cart-product-emoji">{item.emoji}</div>

                  <div className="cart-product-info">
                    <h3>{item.name}</h3>
                    <p>{item.qty}</p>
                    <strong>₹{item.price}</strong>
                  </div>

                  <div className="cart-actions">
                    <button
                      className="remove-cart-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                    <div className="quantity-box">
                      <button onClick={() => changeQuantity(item.id, -1)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => changeQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="cart-summary-box">
              <div>
                <span>Subtotal</span>
                <strong>₹{cartTotal}</strong>
              </div>

              <div>
                <span>Delivery</span>
                <strong>FREE</strong>
              </div>

              <hr />

              <div className="cart-total-row">
                <span>Total</span>
                <strong>₹{cartTotal}</strong>
              </div>

              <button className="checkout-button" onClick={placeOrder}>
                Proceed to Checkout →
              </button>
            </section>
          </>
        )}
      </main>
    );
  }

  function renderProfile() {
    if (!isLoggedIn) {
      return (
        <main className="main-content">
          <div className="profile-card">
            <div className="profile-avatar">👤</div>

            <h2>Welcome to Flash</h2>

            <p>Login to save your cart, orders and favourite products.</p>

            <div className="login-form">
              <label>Your name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />

              <label>Mobile number</label>

              <input
                type="tel"
                placeholder="Enter 10 digit mobile number"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />

              <button
                className="checkout-button"
                onClick={() => {
                  if (userName.trim() === "" || mobile.trim().length < 10) {
                    showMessage("Enter your name and valid mobile number");
                    return;
                  }

                  setIsLoggedIn(true);
                  showMessage(`Welcome to Flash, ${userName}!`);
                }}
              >
                Login to Flash →
              </button>
            </div>
          </div>
        </main>
      );
    }

    return (
      <main className="main-content">
        <div className="profile-card">
          <div className="profile-avatar">👤</div>

          <h2>Hello, {userName} 👋</h2>

          <p>Welcome back to Flash. Your best grocery deals are ready.</p>

          <div className="profile-details">
            <div>
              <span>Mobile number</span>
              <strong>{mobile}</strong>
            </div>

            <div>
              <span>Cart items</span>
              <strong>{cartItemCount}</strong>
            </div>
          </div>

          <button
            className="checkout-button"
            onClick={() => goToPage("orders")}
          >
            📦 View My Orders
          </button>

          <button
            className="logout-button"
            onClick={() => {
              setIsLoggedIn(false);
              setUserName("");
              setMobile("");

              localStorage.removeItem("flash-user-name");
              localStorage.removeItem("flash-mobile");
              localStorage.removeItem("flash-logged-in");

              showMessage("You are logged out");
            }}
          >
            Logout
          </button>
        </div>
      </main>
    );
  }

  function renderOrders() {
    return (
      <main className="main-content">
        <div className="section-heading">
          <div>
            <h2>📦 My Orders</h2>
            <p>{orders.length} order(s) placed</p>
          </div>

          <button className="view-all" onClick={() => goToPage("home")}>
            Shop more
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="empty-state">
            <div>📦</div>
            <h3>No orders yet</h3>
            <p>Your placed orders will appear here.</p>

            <button onClick={() => goToPage("home")}>Start shopping</button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <article className="order-card" key={order.id}>
                <div className="order-top">
                  <div>
                    <strong>Order #{String(order.id).slice(-6)}</strong>
                    <p>{order.date}</p>
                  </div>

                  <span className="order-status">{order.status}</span>
                </div>

                <div className="order-items">
                  {order.items.map((item) => (
                    <p key={item.id}>
                      {item.emoji} {item.name} × {item.quantity}
                    </p>
                  ))}
                </div>

                <div className="order-total">
                  <span>Total paid</span>
                  <strong>₹{order.total}</strong>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    );
  }

  let content = renderHome();

  if (page === "categories") content = renderCategories();
  if (page === "search") content = renderSearch();
  if (page === "cart") content = renderCart();
  if (page === "profile") content = renderProfile();
  if (page === "orders") content = renderOrders();

  return (
    <div className="app">
      <header className="header">
        <button className="brand brand-button" onClick={() => goToPage("home")}>
          <div className="logo">⚡</div>

          <div>
            <h1>Flash</h1>
            <p>Best deals in seconds</p>
          </div>
        </button>

        <button className="login-button" onClick={() => goToPage("profile")}>
          {isLoggedIn ? userName : "Login"}
        </button>
      </header>

      {content}

      <nav className="bottom-nav">
        <button
          className={`nav-item ${page === "home" ? "active" : ""}`}
          onClick={() => goToPage("home")}
        >
          <span className="nav-icon">⌂</span>
          <small>Home</small>
        </button>

        <button
          className={`nav-item ${page === "categories" ? "active" : ""}`}
          onClick={() => goToPage("categories")}
        >
          <span className="nav-icon">▦</span>
          <small>Categories</small>
        </button>

        <button
          className={`nav-item ${page === "search" ? "active" : ""}`}
          onClick={() => goToPage("search")}
        >
          <span className="nav-icon">⌕</span>
          <small>Search</small>
        </button>

        <button
          className={`nav-item ${page === "cart" ? "active" : ""}`}
          onClick={() => goToPage("cart")}
        >
          <span className="nav-icon">🛒</span>
          <small>Cart</small>

          {cartItemCount > 0 && <i>{cartItemCount}</i>}
        </button>

        <button
          className={`nav-item ${page === "profile" ? "active" : ""}`}
          onClick={() => goToPage("profile")}
        >
          <span className="nav-icon">♙</span>
          <small>Profile</small>
        </button>
      </nav>

      {message && <div className="toast-message">{message}</div>}
    </div>
  );
}

export default App;