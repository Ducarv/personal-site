import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
      <div className="flex flex-col min-h-screen bg-[#343a40] text-gray-200">
        <div className="w-[700px] max-w-full mx-auto px-6 flex flex-col flex-grow">
          <Header />
          <main className="flex-grow py-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    );
  };

export default Layout;
