import { Suspense, useContext } from "react";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";

import { Chat, List } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./profile.scss";

function Profile() {
  const profileProperties = useLoaderData();
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

            <Link to="/profile/update">Update Profile</Link>
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

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={profileProperties.propertiesResponse}
              errorElement={<p>Error loading properties!</p>}
            >
              {(propertiesResponse) => (
                <List posts={propertiesResponse.data.userPosts} />
              )}
            </Await>
          </Suspense>

          <div className="title">
            <h2>Saved List</h2>
          </div>

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={profileProperties.propertiesResponse}
              errorElement={<p>Error loading properties!</p>}
            >
              {(propertiesResponse) => (
                <List posts={propertiesResponse.data.savedPosts} />
              )}
            </Await>
          </Suspense>
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
