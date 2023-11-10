import Navbar from "../components/Navbar";
import AsideNav from "../components/AsideNav";
import MiniSidebar from "../components/MiniSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex pt-[70px] overflow-hidden main_bg">
        <AsideNav />

        <main className="flex  relative w-full h-screen overflow-y-auto lg:ml-20 -bar pt-1 ">
          <MiniSidebar />
          <div className="px-4 pt-6 overflow relative w-full h-screen overflow-y-auto lg:ml-20 -bar ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
