import { Link } from "react-router-dom";
import "./chat.scss";

function Chat() {
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        <div className="messages-container">
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>

      <div className="chat-box">chat-box</div>
    </div>
  );
}

export default Chat;

const MessageCard = () => {
  return (
    <Link to="/profile" className="message">
      <img
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="message-content">
        <span>Felix Olali</span>
        <em>
          Hello, hope you're well and safe. Hello, hope you're well and safe.
          Hello, hope you're well and safe.
        </em>
      </div>
    </Link>
  );
};
