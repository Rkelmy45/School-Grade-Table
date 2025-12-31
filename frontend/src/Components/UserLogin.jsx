import React from "react";
import "../Styles/UserLogin.css";

function UserLogin() {
  return (
    <div className="container-login">
      <h1 className="titulo-login">Login</h1>

      <div className="container-input-login">
        <p className="titulo-input-login">Full Name:</p>
        <input
          className="input-login"
          name="Full Name"
          type="text"
          placeholder="Ex: Juan Antonio Jimenez Garrido"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input-login">Email Address:</p>
        <input
          className="input-login"
          name="EmailAdress"
          type="text"
          placeholder="example@mail.com"
          //   value={}
          //   onChange={}
        />

        <p className="titulo-input-login">Password:</p>
        <input
          className="input-login"
          name="password"
          type="text"
          placeholder="********"
          //   value={}
          //   onChange={}
        />

        <div className="container-btn-login">
          <button className="btn-login">LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
