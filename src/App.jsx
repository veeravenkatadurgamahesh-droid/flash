import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Offers from "./pages/Offers";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import ComparePrices from "./pages/ComparePrices";
import Cart from "./pages/Cart";
import CompareBasket from "./pages/CompareBasket";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import Addresses from "./pages/Addresses";
import Notifications from "./pages/Notifications";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";
import Coupons from "./pages/Coupons";
import Support from "./pages/Support";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./admin/AdminDashboard";
import ProductsTable from "./admin/ProductsTable";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Analytics from "./admin/Analytics";

function App() {
  return (
    <Routes>

      {/* ================= USER PAGES ================= */}

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/search" element={<SearchResults />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/compare/:id" element={<ComparePrices />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/compare-basket" element={<CompareBasket />} />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/addresses"
          element={
            <ProtectedRoute>
              <Addresses />
            </ProtectedRoute>
          }
        />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/support" element={<Support />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Route>

      {/* ================= AUTH ================= */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ================= ADMIN ================= */}

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<ProductsTable />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/edit/:id" element={<EditProduct />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/analytics" element={<Analytics />} />

      {/* ================= 404 ================= */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;