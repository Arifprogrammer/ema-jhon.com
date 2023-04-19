import React, { useContext } from "react";
import logo from "../../../resources/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="h-20 bg-[#1c2b35]">
      <div className="w-3/4 mx-auto flex justify-between items-center h-full">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center">
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
          {user?.emailVerified ? (
            ""
          ) : (
            <Link
              to="/signup"
              className="px-5 py-1 rounded-lg hover:bg-slate-400"
            >
              Signup
            </Link>
          )}
          {user?.emailVerified ? (
            ""
          ) : (
            <Link
              to="/login"
              className="px-5 py-1 rounded-lg hover:bg-slate-400"
            >
              Login
            </Link>
          )}
          <div className="flex gap-3 items-center">
            <p>{user?.emailVerified && user.email}</p>
            {user && (
              <button
                className="px-3 py-1 rounded-2xl hover:bg-slate-400"
                onClick={logOut}
              >
                Signout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
