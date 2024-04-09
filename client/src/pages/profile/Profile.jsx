import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Chat, List } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./profile.scss";

function Profile() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h2>User Information</h2>

            <Link to={`/profile/${currentUser?.id}`}>Update Profile</Link>
          </div>

          <div className="info">
            <span>
              Avatar:{" "}
              <img src={currentUser?.avatar || "/noavatar.jpg"} alt="user" />
            </span>

            <span>
              Username: <b>{currentUser?.username}</b>
            </span>
            <span>
              Email: <em>{currentUser?.email}</em>
            </span>

            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h2>My List</h2>

            <Link to="/properties/add">Create New Post</Link>
          </div>
          <List />

          <div className="title">
            <h2>Saved List</h2>
          </div>
          <List />
        </div>
      </div>

      <div className="chat-container">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Profile;
