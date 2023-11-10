import { FiMenu } from "react-icons/fi";
export const Header = () => {
  const handleHamburger = () => {
    console.log("Clicked");
  };
  return (
    <>
      <div className="bg-[white] flex gap-5 items-center w-[100dvw] p-5 ">
        <div
          className=" rounded-[30px] bg-[#ECEEFE]  p-4"
          onClick={handleHamburger}
        >
          <FiMenu />
        </div>
        <h1 className="text-[black] font-bold text-[34px]">Bexmico</h1>
      </div>
    </>
  );
};
