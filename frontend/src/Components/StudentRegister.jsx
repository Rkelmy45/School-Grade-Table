import React from "react";
import "../Styles/StudentRegister.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { StudentScoreController } from "../Settings/appsettings";

function StudentRegister() {
  // Hook ///////////////////////////////////////////////////////////////////////////////////
  const [student, setStudent] = useState({
    fullname: "",
    classroom: "",
    age: "",
    englishGrade: "",
    incidents: "",
    productions: "",
  });

  // Handle Change Student ////////////////////////////////////////////////////////////////
  const handleChangeStudent = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  // POST Method //////////////////////////////////////////////////////////////
  const saveStudent = async () => {
    const response = await fetch(StudentScoreController.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    if (response.ok) {
      Swal.fire({
        title: "Good job!",
        text: "Student Saved Successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oop...",
        text: "The Student Could Not Be Saved!",
        // footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container-studentregister">
      <h1 className="titulo-studentregister">Student Register</h1>

      <div className="container-input-studentregister">
        <p className="titulo-input">Full Name:</p>

        <input
          className="input-studentregister"
          name="fullname"
          type="text"
          placeholder="Ex: Juan Antonio Jimenez Garrido"
          value={student.fullname}
          onChange={handleChangeStudent}
        />

        <p className="titulo-input">Classroom:</p>
        <input
          className="input-studentregister"
          name="classroom"
          type="text"
          placeholder="Ex: 3A"
          value={student.classroom}
          onChange={handleChangeStudent}
        />

        <p className="titulo-input">Age:</p>
        <input
          className="input-studentregister"
          name="age"
          type="number"
          placeholder="Ex: 15"
          value={student.age}
          onChange={handleChangeStudent}
        />

        <p className="titulo-input">English Grade:</p>
        <input
          className="input-studentregister"
          name="englishGrade"
          type="number"
          placeholder="Ex: 70"
          value={student.englishGrade}
          onChange={handleChangeStudent}
        />

        <p className="titulo-input">Incidents:</p>
        <textarea
          className="texttarea"
          name="incidents"
          maxLength={1000}
          placeholder="Write the incidents here..."
          value={student.incidents}
          onChange={handleChangeStudent}
        ></textarea>

        <p className="titulo-input">Productions:</p>
        <textarea
          className="texttarea"
          name="productions"
          maxLength={1000}
          placeholder="Write the productions here..."
          value={student.productions}
          onChange={handleChangeStudent}
        ></textarea>

        <div className="container-btn-studentRegister">
          <button className="btn-studentRegister" onClick={saveStudent}>
            Add To The Student Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
