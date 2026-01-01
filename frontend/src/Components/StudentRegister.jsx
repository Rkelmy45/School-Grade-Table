import React from "react";
import "../Styles/StudentRegister.css";

function StudentRegister() {
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
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">Classroom:</p>
        <input
          className="input-studentregister"
          name="classroom"
          type="text"
          placeholder="Ex: 3A"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">Age:</p>
        <input
          className="input-studentregister"
          name="classroom"
          type="number"
          placeholder="Ex: 15"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">English Grade:</p>
        <input
          className="input-studentregister"
          name="classroom"
          type="number"
          placeholder="Ex: 70"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">Incidents:</p>
        <textarea
          className="texttarea"
          maxLength={350}
          placeholder="Write the incidents here..."
          //   value={}
          //   onChange={}
        ></textarea>

        <p className="titulo-input">Productions:</p>
        <textarea
          className="texttarea"
          maxLength={350}
          placeholder="Write the productions here..."
          //   value={}
          //   onChange={}
        ></textarea>

        <div className="container-btn-studentRegister">
          <button className="btn-studentRegister">
            Add To The Student Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
