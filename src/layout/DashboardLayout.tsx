import Navbar from "../components/Navbar";
import AsideNav from "../components/AsideNav";
import MiniSidebar from "../components/MiniSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex pt-[70px] overflow-hidden main_bg">
        <AsideNav />
        <MiniSidebar />
        <main className="relative w-full h-screen overflow-y-auto lg:ml-20 px-4 pt-6 overflow-bar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
