import React from "react";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFF",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Dashboard />
    </div>
  );
}

export default App;
