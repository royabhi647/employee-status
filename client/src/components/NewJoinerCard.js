import React, { useRef } from "react";
import "./card.css";
import { FcPrevious, FcNext } from "react-icons/fc";

function NewJoinerCard(props) {
  const newJoinerEmployeeRef = useRef(null);
  const newJoiner = props.newJoiner;
  //   console.log("newJoiner", newJoiner);

  const nextnewJoinerEmployee = () => {
    newJoinerEmployeeRef.current.scrollLeft += 200;
  };

  const prevnewJoinerEmployee = () => {
    newJoinerEmployeeRef.current.scrollLeft -= 200;
  };

  return (
    <div>
      <div className="joiner-prev-btn" onClick={prevnewJoinerEmployee}>
        <FcPrevious />
      </div>
      <div
        className="birthday-container"
        ref={newJoinerEmployeeRef}
        style={{ marginLeft: "20px" }}
      >
        {newJoiner?.map((employee, index) => (
          <div className="card">
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              {employee.DOB}
            </p>
            <div style={{ padding: "7px 0px" }}>
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
      <div className="joiner-next-btn" onClick={nextnewJoinerEmployee}>
        <FcNext />
      </div>
    </div>
  );
}

export default NewJoinerCard;
