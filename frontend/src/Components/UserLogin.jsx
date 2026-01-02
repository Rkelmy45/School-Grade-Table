import React from "react";
import "../Styles/UserLogin.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { UserRegisterController } from "../Settings/appsettings";

function UserLogin() {
  // Hook ///////////////////////////////////////////////////////////////////////////////////
  const [login, setLogin] = useState({
    fullname: "",
    emailaddress: "",
    password: "",
  });

  // Handle Change Student ////////////////////////////////////////////////////////////////
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  // GET Method //////////////////////////////////////////////////////////////
  const getUser = async () => {
    const response = await fetch(
      `${UserRegisterController.apiUrl}/${login.fullname}`
    );

    if (response.ok) {
      const loginResult = await response.json();
      setLogin(loginResult);

      Swal.fire({
        title: "Welcome Dear User!",
        html: `
          <b>User:</b>${loginResult.fullname}<br/>
          <b>Email Address:</b>${loginResult.emailaddress}<br/>
        `,
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Not Found!",
      });
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container-login">
      <h1 className="titulo-login">User Login</h1>

      <div className="container-input-login">
        <p className="titulo-input-login">Full Name:</p>
        <input
          className="input-login"
          name="fullname"
          type="text"
          placeholder="Ex: Juan Antonio Jimenez Garrido"
          value={login.fullname}
          onChange={handleChangeLogin}
        />

        <p className="titulo-input-login">Email Address:</p>
        <input
          className="input-login"
          name="emailaddress"
          type="text"
          placeholder="example@mail.com"
          value={login.emailaddress}
          onChange={handleChangeLogin}
        />

        <p className="titulo-input-login">Password:</p>
        <input
          className="input-login"
          name="password"
          type="password"
          placeholder="********"
          value={login.password}
          onChange={handleChangeLogin}
        />

        <div className="container-btn-login">
          <button className="btn-login" onClick={getUser}>
            USER LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
