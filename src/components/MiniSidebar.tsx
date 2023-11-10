import data from "../utils/miniSidebarData";

export default function MiniSidebar() {
  return (
    <>
      <div className=" flex flex-col gap-y-[2rem] h-[100dvh] p-[3px] text-[20px] bg-[white]   items-start">
        {data.map((item, index) => (
          <div
            key={index}
            className=" transition ease-inw-[50px] h-[50px] text-[20px] py-3 px-4 rounded-lg hover:bg-[#0000ff1f] hover:text-sky-500 flex  items-center gap-2 w-[250px] m-[0 2 0 2]"
          >
            <div>{item.icon}</div>
            <p className="">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
