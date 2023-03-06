import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserList from "./components/UserList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <b className="App-header">
        <Link className="App-link" to="/">
          Home
        </Link>
        <Link className="App-link" to="/login">
          Logovanje
        </Link>
        <Link className="App-link" to="/register">
          Registracija
        </Link>
        <Link className="App-link" to="/users">
          Korisnici
        </Link>
      </b>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
