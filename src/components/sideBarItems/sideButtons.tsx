import React from "react";
import "./sideStyles.css";
const SideButtons: React.FC = () => {
  return (
    <form>
      <button type="submit" className="addPost">
        <span>Post</span>
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
};
export default SideButtons;
