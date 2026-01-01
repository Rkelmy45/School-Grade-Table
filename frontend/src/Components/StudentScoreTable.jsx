import React from "react";
import "../Styles/StudentScoreTable.css";

function StudentScoreTable() {
  return (
    <div className="container-studentcore">
      <h1 className="titulo-studentcore">Student Score Table</h1>

      <div className="container-searchStudent">
        <input
          className="input-searchStudent"
          placeholder="Search For Student"
        />
        <button className="btn-searchStudent">Search</button>
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

          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentScoreTable;
