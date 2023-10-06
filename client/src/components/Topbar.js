import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";

function Topbar() {
  const [allEmployee, setAllEmployee] = useState([]);
  console.log("allEmployee", allEmployee);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/employees");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("data", data);
        setAllEmployee(data);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          width: "49%",
          height: "20%",
          background: "#FFF",
          borderRadius: "8px",
        }}
      >
        <h4 style={{ marginLeft: "10px", marginTop: "8px" }}>Birthday</h4>
        <CommonCard allEmployee={allEmployee} />
      </div>
      <div
        style={{
          width: "49%",
          height: "20%",
          background: "#FFF",
          borderRadius: "8px",
        }}
      >
        <h4 style={{ marginLeft: "10px", marginTop: "8px" }}>New Joinee</h4>
        <CommonCard />
      </div>
    </div>
  );
}

export default Topbar;
