import React from "react";
import Sidebar from "../component/dashboard/navbar/navbar.jsx";
import Navabar from "../component/dashboard/sidebar/sidebar.jsx";
const layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navabar />
        {children}
      </div>
    </div>
  );
};

export default layout;
