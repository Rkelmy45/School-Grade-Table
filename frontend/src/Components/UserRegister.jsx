import React from "react";
import "../Styles/UserRegister.css";

function UserRegister() {
  return (
    <div className="container-register">
      <h1 className="Titulo-registration">Registration</h1>

      <div className="container-input">
        <p className="titulo-input">Full Name:</p>

        <input
          className="form-input"
          name="Full Name"
          type="text"
          placeholder="Ex: Juan Antonio Jimenez Garrido"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">User Name:</p>
        <input
          className="form-input"
          name="UserName"
          type="text"
          placeholder="Ex: JA45JG"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">Email Address:</p>
        <input
          className="form-input"
          name="EmailAdress"
          type="text"
          placeholder="example@mail.com"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input">Password:</p>
        <input
          className="form-input"
          name="password"
          type="text"
          placeholder="********"
          //   value={}
          //   onChange={}
        />

        <div className="container-btn-registration">
          <button className="btn-register">REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
