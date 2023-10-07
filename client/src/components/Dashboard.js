import React from "react";
import SearchBar from "./SearchBar";
import Topbar from "./Topbar";

function Dashboard() {
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        background: "#F5F5F5",
        borderRadius: "30px",
      }}
    >
      <div style={{ margin: "15px" }}>
        <Topbar />
        <SearchBar />
      </div>
    </div>
  );
}

export default Dashboard;
