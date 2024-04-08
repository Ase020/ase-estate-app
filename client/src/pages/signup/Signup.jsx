import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./signup.scss";
import { useState } from "react";

function Signup() {
  const baseUrl = "http://localhost:8800/api";

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post(`${baseUrl}/auth/register`, {
        username,
        email,
        password,
      });

      console.log("Data: ", res.data);
      navigate("/login");
    } catch (error) {
      console.log("Error: ", error);
      setErr(error.response.data.message);
    }
  };
  return (
    <div className="signup">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Register</button>

          {err && <p>{err}</p>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Signup;
