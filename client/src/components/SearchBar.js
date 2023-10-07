import React, { useEffect, useState } from "react";
import "./card.css";

function SearchBar() {
  const [allEmployee, setAllEmployee] = useState([]);
  console.log("allEmployee", allEmployee);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageData, setPerPageData] = useState([]);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const limitedDataPerPage = allEmployee?.slice(startIndex, endIndex);
    setPerPageData(limitedDataPerPage);
  }, [startIndex, endIndex, allEmployee]);

  useEffect(() => {
    const fetchdata = async () => {
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
    fetchdata();
  }, []);

  const handleSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        // console.log("searchEmployee", result);
        setPerPageData(result);
      }
    }
  };
  return (
    <div>
      <div
        style={{ background: "#FFF", borderRadius: "8px", marginTop: "10px" }}
      >
        <h4 style={{ marginLeft: "10px", paddingTop: "8px" }}>Search</h4>
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            onChange={handleSearch}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Dept"
            onChange={handleSearch}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Employee id"
            onChange={handleSearch}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Designation"
            onChange={handleSearch}
            className="input-field"
          />
        </div>
      </div>
      <div
        style={{ background: "#FFF", borderRadius: "8px", marginTop: "10px" }}
        className="table-container"
      >
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Full Name</th>
              <th>Dept</th>
              <th>Email Id</th>
              <th>Designation</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {perPageData.map((employee, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={employee.image}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>{employee.Name}</td>
                <td>{employee.Dept}</td>
                <td>{employee.Email}</td>
                <td>{employee.Designation}</td>
                <td>{employee.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <p
          className="pagination-item"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          Prev
        </p>
        <p
          className="pagination-item"
          style={{ cursor: "none", color: "#000" }}
        >
          {currentPage}
        </p>
        <p
          className="pagination-item"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </p>
      </div>
    </div>
  );
}

export default SearchBar;
