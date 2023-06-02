import React from "react";
import "./App.css";
import TopBar from "./components/topBarItems/topbar";
import SideBar from "./components/sideBarItems/sidebar";
import BlogArea from "./components/blogItems/blogArea";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <TopBar />
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <BlogArea />
      </div>
    </div>
  );
};

export default App;
