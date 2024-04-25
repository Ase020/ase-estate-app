import { Link, useNavigate } from "react-router-dom";

import "./login.scss";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErr("");
    setLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data.userData);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
      setErr(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" disabled={loading}>
            Login
          </button>

          {err && <p className="error">{err}</p>}
          <Link to="/signup">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
