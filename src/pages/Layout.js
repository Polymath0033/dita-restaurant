import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "../App.css";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
export default Layout;
