import React from "react";
import {
  FiHome,
  FiShoppingCart,
  FiBox,
  FiFileText,
  FiTruck,
} from "react-icons/fi";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const data = [
  {
    name: "Order Summary",
    icon: <FiHome />,
  },
  {
    name: " Create PO",
    icon: <FiShoppingCart />,
  },
  {
    name: "Add New Vendor",
    icon: <FiBox />,
  },
  {
    name: "Account Payable",
    icon: <FiFileText />,
  },
  {
    name: "Vendors",
    icon: <FiTruck />,
  },

  {
    name: "Order Approvals",
    icon: <PiNewspaperClippingDuotone />,
  },
  {
    name: "Sales Orders",
    icon: <CgProfile />,
  },
  {
    name: "Account Receivable",
    icon: <CgProfile />,
  },
  {
    name: "Clients",
    icon: <CgProfile />,
  },
];
export default data;
