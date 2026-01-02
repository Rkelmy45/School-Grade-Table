import "./App.css";
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin";
import StudentScoreTable from "./Components/StudentScoreTable";
import StudentRegister from "./Components/StudentRegister";
import { useState } from "react";

function App() {
  const [view, setView] = useState("userRegister");

  return (
    <div className="App">
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      {/* NAV */}
      <nav className="sidebar">
        <button
          className="btn-userRegister"
          onClick={() => setView("userRegister")}
        >
          User Register
        </button>

        <button
          className="btn-userRegister"
          onClick={() => setView("userLogin")}
        >
          User Login
        </button>

        <button
          className="btn-userRegister"
          onClick={() => setView("studentRegister")}
        >
          Student Register
        </button>

        <button
          className="btn-userRegister"
          onClick={() => setView("studentScoreTable")}
        >
          Student Score Table
        </button>
      </nav>
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}

      {/* CONTENIDO */}
      <div className="main-content">
        {view === "userRegister" && <UserRegister />}
        {view === "userLogin" && <UserLogin />}
        {view === "studentRegister" && <StudentRegister />}
        {view === "studentScoreTable" && <StudentScoreTable />}
      </div>
    </div>
  );
}

export default App;
