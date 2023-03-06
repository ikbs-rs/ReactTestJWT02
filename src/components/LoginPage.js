import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8380/users/login", formData)
      .then((response) => {
        if (response.data.success) {
          sessionStorage.setItem("access_token", response.data.token, { expires: 600000 });
          localStorage.setItem("refresh_token", response.data.refreshToken);
          history("/");
        } else {
          throw new Error("Pogrešna lozinka");
          //setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dobrodošli na stranicu za logovanje</h1>
      <label>
        E-pošta:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Login" />
    </form>
  );
}

export default LoginPage;
