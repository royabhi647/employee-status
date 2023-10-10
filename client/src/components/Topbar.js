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
        const response = await fetch(
          "https://employee-status.onrender.com/employees"
        );
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

  console.log("todayBirthdayEmployees", todayBirthdayEmployees);

  // new Joiner
  const currentDate = new Date();
  const nextTwoDays = new Date();
  nextTwoDays.setDate(currentDate.getDate() + 2);

  const newJoiners = allEmployee.filter((employee) => {
    const joinDateParts = employee.joiningDate.split("-");
    console.log("joinDateParts", joinDateParts);
    const day = parseInt(joinDateParts[0]);
    console.log("day", day);
    const monthAbbreviation = joinDateParts[1];
    console.log("month", monthAbbreviation);
    const year = parseInt(joinDateParts[2], 10);
    console.log("year", year);

    const month = getMonthNumber(monthAbbreviation);

    const joinDate = new Date(year, month, day);

    return (
      (joinDate.getDate() >= currentDate.getDate() &&
        joinDate.getMonth() === currentDate.getMonth() &&
        joinDate.getFullYear() === currentDate.getFullYear()) ||
      (joinDate.getDate() <= nextTwoDays.getDate() &&
        joinDate.getMonth() === nextTwoDays.getMonth() &&
        joinDate.getFullYear() === currentDate.getFullYear())
    );
  });

  console.log("newJoiners", newJoiners);

  function getMonthNumber(monthAbbreviation) {
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    return months[monthAbbreviation];
  }

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
