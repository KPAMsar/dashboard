import Graph from "../components/Graph";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { UpAndDownGraph } from "../components/UpAndDownGraph";
import { FiTruck } from "react-icons/fi";
import { HiChevronLeft } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className=" flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="rounded-[30px] bg-[blue]  p-3">
              <HiChevronLeft style={{ color: "white" }} />
            </div>
            <p className="font-[700] text-black text-[20px] ">
              Buyer Analytics Overview
            </p>
          </div>
          <div className="flex gap-[2rem]">
            <div className="card bg-white shadow-md p-5 w-[400px]">
              <div className="flex flex-col gap-3">
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
            <div className="flex gap-[2rem]">
              <div className="flex flex-col gap-[2rem]">
                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start">
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
                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start">
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
              <div className="flex flex-col gap-[2rem]">
                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start">
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
                <div className="card bg-white flex flex-col gap-[1.5rem] shadow-md p-5 w-[300px] h-[200px] justify-start">
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

          <div className="flex justify-between gap-1">
            <div className="card bg-white shadow-md p-5 w-1/2">
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
            <div className="card bg-white shadow-md p-5 w-1/2">
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
