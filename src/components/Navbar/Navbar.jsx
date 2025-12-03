import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold"
      : "text-gray-700 hover:text-green-700";

  const links = (
    <>
      <li className="m-2.5 text-base">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li className="m-2.5 text-base">
        <NavLink to="/plants" className={navLinkClass}>
          All Plants
        </NavLink>
      </li>
      <li className="m-2.5 text-base">
        <NavLink to="/about" className={navLinkClass}>
          About Us
        </NavLink>
      </li>
      <li className="m-2.5 text-base">
        <NavLink to="/contact" className={navLinkClass}>
          Contact Us
        </NavLink>
      </li>
      <li className="m-2.5 text-base">
        <NavLink to="/support" className={navLinkClass}>
          Support
        </NavLink>
      </li>
    </>
  );

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-green-100 sticky top-0 z-50">
      <div className="navbar max-w-11/12 mx-auto px-4 lg:px-6">
        {/* LEFT: Logo + mobile menu */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
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
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}

              {/* Mobile-only Login/Register (when not logged in) */}
              {!user && (
                <li className="m-2.5 text-base">
                  <NavLink to="/login" className={navLinkClass}>
                    Login / Register
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost text-green-800 font-extrabold georama-font text-2xl"
          >
            GreenNest
          </Link>
        </div>

        {/* CENTER: Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT: Auth buttons (desktop) / avatar dropdown */}
        <div className="navbar-end gap-3">
          {/* Desktop Login/Signup (hidden on mobile) */}
          {!user && (
            <div className="hidden lg:flex items-center gap-3">
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
            </div>
          )}

          {/* User avatar dropdown (visible on all sizes when logged in) */}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt={user.displayName || "User"}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                <li className="text-center font-medium">
                  {user.displayName || "User"}
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;