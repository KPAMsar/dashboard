import React, { ReactNode, createContext, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import AsideNav from "../components/AsideNav";
import MiniSidebar from "../components/MiniSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface MiniSidebarContextProps {
  activeMinisidebar: boolean;
  setActiveMinisidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiniSidebarContext = createContext<MiniSidebarContextProps | undefined>(
  undefined
);

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [activeMinisidebar, setActiveMinisidebar] = useState<boolean>(false);
  console.log("in layout", activeMinisidebar);
  return (
    <div>
      <Navbar />
      <div className="flex pt-[70px] overflow-hidden main_bg">
        <AsideNav />

        <main className="flex  relative w-full h-screen overflow-y-auto lg:ml-20 -bar pt-1 ">
          {activeMinisidebar && (
            <div
              className={`lg:block transform ${
                activeMinisidebar ? "translate-x-0" : "-translate-x-full"
              } transition-transform ${activeMinisidebar ? "block" : "hidden"}`}
            >
              <MiniSidebar />
            </div>
          )}
          <div
            className={`px-4 pt-6 overflow relative w-full h-screen overflow-y-auto lg:ml-20 -bar  ${
              activeMinisidebar ? "w-[100dvw]" : "0px"
            }`}
          >
            <MiniSidebarContext.Provider
              value={{ activeMinisidebar, setActiveMinisidebar }}
            >
              {children}
            </MiniSidebarContext.Provider>
          </div>
        </main>
      </div>
    </div>
  );
};

const useMiniSidebarContext = () => {
  const context = useContext(MiniSidebarContext);

  if (!context) {
    throw new Error(
      "useMiniSidebarContext must be used within a MiniSidebarProvider"
    );
  }

  return context;
};

export { DashboardLayout, useMiniSidebarContext };
