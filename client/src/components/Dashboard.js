import React from "react";
import Topbar from "./Topbar";

function Dashboard() {
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        background: "#F5F5F5",
        // boxShadow: "0px 44px 84px 6px #D8D9DB",
        borderRadius: "30px",
      }}
    >
      <div style={{ margin: "15px" }}>
        <Topbar />
      </div>
    </div>
  );
}

export default Dashboard;
