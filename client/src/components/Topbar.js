import React, { useEffect, useState } from "react";
import BirthdayCommonCard from "./BirthdayCommonCard";
import NewJoinerCard from "./NewJoinerCard";
import "./card.css";

function Topbar() {
  const [allEmployee, setAllEmployee] = useState([]);
  // console.log("allEmployee", allEmployee);

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

  // Today Birthday employee
  const today = new Date();

  const todayBirthdayEmployees = allEmployee.filter((employee) => {
    const dobParts = employee.DOB.split("-");
    const birthday = new Date(
      today.getFullYear(),
      today.getMonth(),
      parseInt(dobParts[0], 10)
    );
    return (
      birthday.getMonth() === today.getMonth() &&
      birthday.getDate() === today.getDate()
    );
  });

  // new Joiner
  const currentDate = new Date();
  const nextTwoDays = new Date();
  nextTwoDays.setDate(currentDate.getDate() + 2);

  const newJoiners = allEmployee.filter((employee) => {
    const joinDate = new Date(employee.joiningDate);
    return joinDate >= currentDate && joinDate <= nextTwoDays;
  });

  return (
    <div className="top-container">
      <div className="birthday-card-container">
        <h4 style={{ marginLeft: "10px", marginTop: "8px" }}>Birthday</h4>

        <BirthdayCommonCard todayBirthdayEmployees={todayBirthdayEmployees} />
      </div>
      <div className="birthday-card-container">
        <h4 style={{ marginLeft: "10px", marginTop: "8px" }}>New Joininee</h4>
        <NewJoinerCard newJoiner={newJoiners} />
      </div>
    </div>
  );
}

export default Topbar;
