import React from "react";
import "../Styles/UserRegister.css";
import { useState } from "react";
import { UserRegisterController } from "../Settings/appsettings";
import Swal from "sweetalert2";

function UserRegister() {
  // Hook ///////////////////////////////////////////////////////////////////////////////////
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    emailaddress: "",
    password: "",
  });

  // Handle Change Student ////////////////////////////////////////////////////////////////
  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // POST Method //////////////////////////////////////////////////////////////
  const saveUser = async () => {
    const response = await fetch(UserRegisterController.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      Swal.fire({
        title: "Good job!",
        text: "User Saved Successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oop...",
        text: "The User Could Not Be Saved!",
        // footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="container-register">
      <h1 className="Titulo-registration">User Registration</h1>

      <div className="container-input">
        <p className="titulo-input">Full Name:</p>

        <input
          className="form-input"
          name="fullname"
          type="text"
          placeholder="Ex: Juan Antonio Jimenez Garrido"
          value={user.fullname}
          onChange={handleChangeUser}
        />

        <p className="titulo-input">Username:</p>
        <input
          className="form-input"
          name="username"
          type="text"
          placeholder="Ex: JAJG45"
          value={user.username}
          onChange={handleChangeUser}
        />

        <p className="titulo-input">Email Address:</p>
        <input
          className="form-input"
          name="emailaddress"
          type="text"
          placeholder="JAJG@example.com"
          value={user.emailaddress}
          onChange={handleChangeUser}
        />

        <p className="titulo-input">Password:</p>
        <input
          className="form-input"
          name="password"
          type="text"
          placeholder="********"
          value={user.password}
          onChange={handleChangeUser}
        />

        <div className="container-btn-registration">
          <button className="btn-register" onClick={saveUser}>
            USER REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
