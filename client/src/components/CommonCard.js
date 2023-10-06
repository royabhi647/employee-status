import React from "react";

function CommonCard(props) {
  const birthdayEmployee = props.allEmployee;
  console.log("birthdayEmployee", birthdayEmployee);
  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {birthdayEmployee?.map((employee, index) => (
        <div
          style={{
            width: "80px",
            height: "90px",
            margin: "5px",
            background: "green",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        >
          <p>{employee.DOB}</p>
        </div>
      ))}
    </div>
  );
}

export default CommonCard;
