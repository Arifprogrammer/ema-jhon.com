import React from "react";
import logo from "../../../resources/images/Logo.svg";

const Header = () => {
  return (
    <nav className="h-20 bg-[#1c2b35]">
      <div className="w-3/4 mx-auto flex justify-between items-center h-full">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-6">
          <p>Order</p>
          <p>Order Review</p>
          <p>Manage Inventory</p>
          <p>Login</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
