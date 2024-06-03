import React from "react";
import TopBr from "./TopBr";
import NavBar from "./NavBar";
import Landing from "./Landing";
export default function Header() {
  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <Landing />
    </div>
  );
}
