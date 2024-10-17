import React from "react";
import { Outlet } from "react-router-dom";
export default function IndexAdmin() {
  return (
    <div className="flex flex-col">
      <p>Admin</p>
      <Outlet/>
    </div>
  );
}
