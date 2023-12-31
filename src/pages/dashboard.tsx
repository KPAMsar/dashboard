import Graph from "../components/Graph";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { UpAndDownGraph } from "../components/UpAndDownGraph";
import { FiTruck } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useMiniSidebarContext } from "../layout/DashboardLayout";

const Dashboard = () => {
  const { activeMinisidebar, setActiveMinisidebar } = useMiniSidebarContext();

  console.log(activeMinisidebar);
  const handleTggle = () => {
    setActiveMinisidebar(!activeMinisidebar);
  };
  return (
    <>
      <div className="flex md:justify-between  xs: justify-center">
        <div className=" flex flex-col xs:justify-center md:gap-4 lg:gap-4  ">
          <div className="flex gap-2 items-center  py-1 ">
            <div
              className={`rounded-[30px] bg-[blue]  p-3   ${
                activeMinisidebar ? ` fixed right-2` : ""
              } `}
              onClick={handleTggle}
            >
              {activeMinisidebar && (
                <HiChevronLeft style={{ color: "white" }} />
              )}
              {!activeMinisidebar && (
                <HiChevronRight style={{ color: "white" }} />
              )}
            </div>
            <p className="font-[700] text-black text-[20px] ">
              Buyer Analytics Overview
            </p>
          </div>
          <div className=" xs:flex-col  xs:pb-[4px] md:flex   gap-[2rem] md:gap-[1rem] lg:gap[2rem] space-y-4">
            <div
              className={`card bg-white shadow-md p-5 xs:w-[100%]  overflow-hidden md:w-[350px] lg:w-[400px]  `}
            >
              <div className="flex flex-col gap-3 ">
                <div className="flex justify-between items-center ">
                  <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                    <BsCurrencyDollar />
                  </div>
                  <div className="flex gap-2 border border-solid border-gray-500 rounded-[4px] p-1">
                    <p>Monthly</p>
                    <HiOutlineChevronDown style={{ color: "blue" }} />
                  </div>
                </div>
                <div className="text-black font-[500] text-left">
                  <p>TOTAL SPEND</p>
                </div>
                <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                  <p className="text-black font-[800] text-[25px]">12,500</p>
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-[red] font-[700]">
                      {" "}
                      <AiFillCaretDown style={{ color: "red" }} />
                    </p>
                    <p className="text-[red] font-[700]">12% less order</p>
                  </div>
                </div>
              </div>

              <div className="">
                <Graph />
              </div>
            </div>

            {/* SECOND ROW */}
            <div className="xs:flex  md:flex gap-[2rem] md:gap-[1rem] lg:gap-[2rem] xs:justify-center ">
              <div className="flex flex-col gap-[2rem] md:gap-[1rem] lg:gap-[2rem] xs:w-full  pb-4">
                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] md:w-[200px] lg:w-[300px] h-[200px] justify-start ">
                  <div className="flex justify-between items-center ">
                    <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                      <BsCurrencyDollar style={{ color: "blue" }} />
                    </div>
                  </div>
                  <div className="text-black font-[500] text-left">
                    <p>PURCHASE ORDER</p>
                  </div>
                  <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                    <p className="text-black font-[800] text-[25px]">4525</p>
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-[green] font-[700]">
                        {" "}
                        <AiFillCaretDown style={{ color: "red" }} />
                      </p>
                      <p className="text-[red] font-[700]">12% less order</p>
                    </div>
                  </div>
                </div>

                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start md:w-[200px] md:gap-[1rem] lg:w-[300px]  ">
                  <div className="flex justify-between items-center ">
                    <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                      <BsCurrencyDollar style={{ color: "blue" }} />
                    </div>
                  </div>
                  <div className="text-black font-[500] text-left">
                    <p>INVOICE COUNT</p>
                  </div>
                  <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                    <p className="text-black font-[800] text-[25px]">4225</p>
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-[red] font-[700]">
                        {" "}
                        <AiFillCaretDown style={{ color: "red" }} />
                      </p>
                      <p className="text-[red] font-[700]">12% less order</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[2rem] md:gap-[1rem] lg:gap-[2rem] mb-4">
                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start md:w-[200px] md:gap-[1rem] lg:w-[300px]">
                  <div className="flex justify-between items-center ">
                    <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                      <FiTruck style={{ color: "blue" }} />
                    </div>
                  </div>
                  <div className="text-black font-[500] text-left">
                    <p>SUPPLIER COUNT</p>
                  </div>
                  <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                    <p className="text-black font-[800] text-[25px]">1555</p>
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-[red] font-[700]">
                        {" "}
                        <AiFillCaretUp style={{ color: "green" }} />
                      </p>
                      <p className="text-[green] font-[700]">12% less order</p>
                    </div>
                  </div>
                </div>

                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start md:w-[200px] lg:w-[300px]">
                  <div className="flex justify-between items-center ">
                    <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                      <BsCurrencyDollar style={{ color: "blue" }} />
                    </div>
                  </div>
                  <div className="text-black font-[500] text-left">
                    <p>PO/INVOICE ACCURACY</p>
                  </div>
                  <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                    <p className="text-black font-[800] text-[25px]">4225</p>
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-[red] font-[700]">
                        {" "}
                        <AiFillCaretDown style={{ color: "red" }} />
                      </p>
                      <p className="text-[red] font-[700]">12% less order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second col for graphs */}

          <div className="xs:flex-col  md:flex md:justify-between md:gap-1 xs:gap-4  ">
            <div className="card bg-white shadow-md p-5 xs:w-[100dvw] md:w-1/2 mb-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center ">
                  <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                    <BsCurrencyDollar style={{ color: "blue" }} />
                  </div>
                </div>
                <div className="text-black font-[500] text-left">
                  <p> SPEND BY LEGAL ENTITY</p>
                </div>
                <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                  <p className="text-black font-[800] text-[25px]">12,500</p>
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-[red] font-[700]">
                      {" "}
                      <AiFillCaretDown style={{ color: "red" }} />
                    </p>
                    <p className="text-[red] font-[700]">12% less order</p>
                  </div>
                </div>
              </div>

              <div className="">
                <UpAndDownGraph />
              </div>
            </div>
            <div className="card bg-white shadow-md p-5 xs:w-[100dvw] md:w-1/2">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center ">
                  <div className="rounded-[30px] bg-[#ECEEFE]  p-4 ">
                    <BsCurrencyDollar style={{ color: "blue" }} />
                  </div>
                </div>
                <div className="text-black font-[500] text-left">
                  <p>VARIATION IN PRICE IN TIME</p>
                </div>
                <div className="text-black font-[700] flex flex-row gap-2 justify-between">
                  <p className="text-black font-[800] text-[25px]">54,525</p>
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-[red] font-[700]">
                      {" "}
                      <AiFillCaretUp style={{ color: "green" }} />
                    </p>
                    <p className="text-[green] font-[700]">12% less order</p>
                  </div>
                </div>
              </div>

              <div className="">
                <Graph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
