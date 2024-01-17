import React from "react";
import Navbar from "../components/dashboard/navbar/navbar.jsx";
import Sidebar from "../components/dashboard/sidebar/sidebar.jsx";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-[#182337] min-h-screen p-5">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
