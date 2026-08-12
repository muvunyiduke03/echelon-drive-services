import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout(){
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip bg-ech-cream">
      <Navbar />

      <main className="min-w-0 flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;