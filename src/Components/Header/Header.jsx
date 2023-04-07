import React from "react";
import logo from "../../../resources/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="h-20 bg-[#1c2b35]">
      <div className="w-3/4 mx-auto flex justify-between items-center h-full">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <Link to="/" className="px-5 py-1 rounded-lg hover:bg-slate-400">
            Shop
          </Link>
          <Link to="/order" className="px-5 py-1 rounded-lg hover:bg-slate-400">
            Order Review
          </Link>
          <Link
            to="/inventory"
            className="px-5 py-1 rounded-lg hover:bg-slate-400"
          >
            Manage Inventory
          </Link>
          <Link to="/login" className="px-5 py-1 rounded-lg hover:bg-slate-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
