import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li className="m-2.5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="m-2.5">
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "text-gray-700"
          }
        >
          Plants
        </NavLink>
      </li>
      <li className="m-2.5">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "text-gray-700"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-50">
      <div className="navbar bg-base-200 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-green-800 font-extrabold georama-font text-2xl"
          >
            GreenNest
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end space-x-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "/default-avatar.png"} alt="User" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                >
                  <li className="text-center font-medium">{user.displayName || "User"}</li>
                  <li>
                    <button onClick={logOut} className="text-red-600">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-green-700 text-white text-lg font-bold px-5 py-1 rounded-3xl"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn border border-green-700 text-green-700 font-bold px-5 py-1 rounded-3xl"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
