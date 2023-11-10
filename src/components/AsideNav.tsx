import { BiHomeAlt } from "react-icons/bi";
import { BsCart2, BsFileEarmarkMedical, BsStack } from "react-icons/bs";
import { ImSpinner4 } from "react-icons/im";
import { PiVanLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const AsideNav = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 z-20 hidden flex-col flex-shrink-0  w-20 h-full pt-[70px] lg:flex ">
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200">
          <div className="flex flex-col flex-1 pb-4 overflow-y-auto overflow-bar">
            <div className="flex-1 mt-[12px] px-3 space-y-1 flex flex-col gap-[10px]">
              <button className=" transition ease-in w-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <BiHomeAlt />
              </button>

              <button className="transition ease-in w-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <BsCart2 />
              </button>

              <button className=" transition ease-inw-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <BsFileEarmarkMedical />
              </button>
              <button className="transition ease-in w-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <PiVanLight />
              </button>
              <button className="transition ease-in w-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <BsStack />
              </button>
              <button className="transition ease-in w-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <ImSpinner4 />
              </button>
              <button className="transition ease-in w-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex justify-center items-center">
                <SlCalender />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideNav;
