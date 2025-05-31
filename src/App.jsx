import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home></Home>
      <Sidebar />
      {/* <Navbar2/>   */}
    </div>
  );
};

export default App;
