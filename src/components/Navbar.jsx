import React from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const userEmail = user?.email;

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>

        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/plants" className="hover:underline">
            Plants
          </Link>
          {!userEmail && (
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          )}
          {!userEmail && (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
