import "./App.css";
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin";
import StudentScore from "./Components/StudentScore";
import { useState } from "react";

function App() {
  const [view, setView] = useState("register");

  return (
    <div className="App">
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      {/* NAV */}
      <nav className="sidebar">
        <button
          className="btn-userRegister"
          onClick={() => setView("register")}
        >
          User Register.
        </button>

        <button className="btn-userRegister" onClick={() => setView("login")}>
          Login.
        </button>

        <button className="btn-userRegister" onClick={() => setView("score")}>
          Student Score.
        </button>
      </nav>
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}

      {/* CONTENIDO */}
      <div className="main-content">
        {view === "register" && <UserRegister />}
        {view === "login" && <UserLogin />}
        {view === "score" && <StudentScore />}
      </div>
    </div>
  );
}

export default App;
