import React from "react";
import "../Styles/StudentScoreTable.css";
import { useState } from "react";
import { StudentScoreController } from "../Settings/appsettings";
import Swal from "sweetalert2";

function StudentScoreTable() {
  // Hook ///////////////////////////////////////////////////////////////////////////////////
  const [search, setSearch] = useState({
    fullname: "",
  });

  const [student, setStudent] = useState(null);

  // Handle Change Student ////////////////////////////////////////////////////////////////
  const handleChangeScore = (e) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  // GET Method //////////////////////////////////////////////////////////////
  const getScore = async () => {
    const response = await fetch(
      `${StudentScoreController.apiUrl}/${search.fullname}`
    );

    if (response.ok) {
      const scoreResult = await response.json();
      setSearch(scoreResult);

      Swal.fire({
        title: "Student Found!",
        html: `<b>User:</b>${scoreResult.fullname}`,
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Student Not Found!",
      });
    }
  };

  ////////////////////////////////////////////////////////////////////////
  return (
    <div className="container-studentcore">
      <h1 className="titulo-studentcore">Student Score Table</h1>

      <div className="container-searchStudent">
        <input
          className="input-searchStudent"
          placeholder="Search By Fullname"
          type="text"
          name="fullname"
          value={search.fullname}
          onChange={handleChangeScore}
        />

        <button className="btn-searchStudent" onClick={getScore}>
          Search
        </button>
      </div>

      <div className="container-table-studentscore">
        <table className="table-studentscore">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Classroom</th>
              <th>Age</th>
              <th>English Grades</th>
              <th>Incidents</th>
              <th>Productions</th>
              <th>Registration Date</th>
            </tr>
          </thead>

          {/* Operador ternario--------------   {condicion ? ( resultado_si_es_true ) : ( resultado_si_es_false )}     */}
          <tbody>
            {student ? (
              <tr>
                <td>{student.fullname}</td>
                <td>{student.classroom}</td>
                <td>{student.age}</td>
                <td>{student.englishGrade}</td>
                <td>{student.incidents}</td>
                <td>{student.productions}</td>
                <td>{student.registrationDate}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Student Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentScoreTable;
