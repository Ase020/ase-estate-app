import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        <div className="messages-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <MessageCard key={i} setChat={setChat} />
          ))}
        </div>
      </div>

      {chat && (
        <div className="chat-box">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span className="username">Felix Olali</span>
            </div>
            <CloseOutlinedIcon
              fontSize="small"
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setChat(null)}
            />
          </div>

          <div className="center">
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chat-message my-message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
          </div>

          <form className="bottom">
            <textarea className="text-area" placeholder="Type a message" />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;

const MessageCard = ({ setChat }) => {
  return (
    <div
      className="message"
      onClick={() => {
        setChat(true);
      }}
    >
      <img
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="user-pic"
      />
      <div className="message-content">
        <span>Felix Olali</span>
        <em>
          Hello, hope you&apos;re well and safe. Hello, hope you&apos;re well
          and safe. Hello, hope you&apos;re well and safe.
        </em>
      </div>
    </div>
  );
};
