import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import "./edit-profile.scss";

function EditProfile() {
  const { currentUser, editUser } = useContext(AuthContext);

  const handleSubmit = async(e) => {
    e.preventDefault()
  };

  return (
    <div className="edit-profile">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={currentUser.avatar || "/noavatar.jpg"}
          alt="avat"
          className="avatar"
        />
      </div>
    </div>
  );
}

export default EditProfile;
