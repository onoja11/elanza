import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#2E2B26]">
      {/* Navbar */}
      <NavBar />

      {/* Page content */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
