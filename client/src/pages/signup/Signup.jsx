import { Link, useNavigate } from "react-router-dom";

import "./signup.scss";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Signup() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErr("");
    setLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log("Data: ", res.data);
      navigate("/login");
    } catch (error) {
      console.log("Error: ", error);
      setErr(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
          />
          <input name="email" type="email" placeholder="Email" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={3}
            maxLength={20}
          />
          <button type="submit" disabled={loading}>
            Register
          </button>

          {err && <p className="error">{err}</p>}
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
