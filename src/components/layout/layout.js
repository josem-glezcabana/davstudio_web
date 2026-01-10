import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
// import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="p-0">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};