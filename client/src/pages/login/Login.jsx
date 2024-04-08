import { Link } from "react-router-dom";

import "./login.scss";

function Login() {
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
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
