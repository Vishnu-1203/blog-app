import React from "react";
import "./blogStyles.css";
import TextBar from "./textBar";
const BlogArea: React.FC = () => {
  return (
    <div className="blogArea">
      <div>
        <TextBar />
      </div>
    </div>
  );
};
export default BlogArea;
