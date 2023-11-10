import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [largeNavOpen, setLargeNavOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white z-30 border-b border-gray-200 fixed">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex justify-start items-center">
            <div className="flex justify-start items-center gap-[15px]">
              <button
                className="w-[40px] h-[40px] rounded-full text-[20px]  hover:bg-gray-300  bg-gray-100 flex justify-center items-center"
                onClick={() => {
                  setMobileMenuOpen(true);
                  setLargeNavOpen(!largeNavOpen);
                }}
              >
                <HiBars3 />
              </button>
              <span className="text-[black] font-[700] text-[34px]">
                Beximco
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6"></div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
