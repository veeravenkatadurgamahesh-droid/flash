import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <BottomNav />

      <Footer />
    </>
  );
}

export default Layout;