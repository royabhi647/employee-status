import React, { useRef } from "react";
import "./card.css";
import { FcPrevious, FcNext } from "react-icons/fc";

function BirthdayCommonCard(props) {
  const birthdayEmployeeRef = useRef(null);
  const todayBirthdayEmployees = props.todayBirthdayEmployees;
  // console.log("birthdayEmployee", todayBirthdayEmployees);

  const nextBirthdayEmployee = () => {
    birthdayEmployeeRef.current.scrollLeft += 200;
  };

  const prevBirthdayEmployee = () => {
    birthdayEmployeeRef.current.scrollLeft -= 200;
  };

  return (
    <div>
      <div className="birthday-prev-btn" onClick={prevBirthdayEmployee}>
        <FcPrevious />
      </div>
      <div
        className="birthday-container"
        ref={birthdayEmployeeRef}
        style={{ marginLeft: "20px" }}
      >
        {todayBirthdayEmployees?.map((employee, index) => (
          <div key={index} className="card">
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              {employee.DOB}
            </p>
            <div
              style={{
                padding: "7px 0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={employee.image}
                  alt=""
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </div>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {employee.Name.slice(0, 11)}
              </p>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {employee.Role.slice(0, 11)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="birthday-next-btn" onClick={nextBirthdayEmployee}>
        <FcNext />
      </div>
    </div>
  );
}

export default BirthdayCommonCard;
