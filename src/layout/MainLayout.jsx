import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* <div className="h-24 bg-green-300">
        <h1>{userEmail}</h1>
      </div> */}

      {/* Main Content */}
      <main className="grow p-5">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
