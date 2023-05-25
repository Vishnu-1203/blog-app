import React from "react";
import "./sideStyles.css";
import SideButtons from "./sideButtons";
const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <SideButtons />
    </div>
  );
};
export default SideBar;
