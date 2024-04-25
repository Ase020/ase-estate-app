import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useContext, useEffect, useRef, useState } from "react";
import { format } from "timeago.js";

import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import apiRequest from "../../lib/apiRequest";

export default function Chat(chats) {
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [showChat, setShowChat] = useState(null);
  const messageEndRef = useRef();

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [showChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;

    try {
      const res = await apiRequest.post(`/messages/${showChat.id}`, { text });
      setShowChat((prev) => ({
        ...prev,
        messages: [...prev.messages, res.data],
      }));
      e.target.reset();

      socket.emit("sendMessage", {
        receiverId: showChat.chatReceiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        apiRequest.put(`/chats/read/${showChat.id}`);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    if (showChat && socket) {
      socket.on("getMessage", (data) => {
        if (showChat.id === data.chatId) {
          setShowChat((prev) => ({
            ...prev,
            messages: [...prev.messages, data],
          }));
          read();
        }
      });
    }

    return () => {
      socket.off("getMessage");
    };
  }, [showChat, socket]);

  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        <div className="messages-container">
          {Array.isArray(chats.chats) &&
            chats.chats.map((chat) => (
              <MessageCard
                key={chat.id}
                showChat={showChat}
                setShowChat={setShowChat}
                chat={chat}
              />
            ))}
        </div>
      </div>

      {showChat && (
        <div className="chat-box">
          <div className="top">
            <div className="user">
              <img
                src={showChat.chatReceiver.avatar || "/noavatar.jpg"}
                alt={showChat.chatReceiver.username || "receiver"}
              />
              <span className="username">{showChat.chatReceiver.username}</span>
            </div>
            <CloseOutlinedIcon
              fontSize="small"
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setShowChat(null)}
            />
          </div>

          <div className="center">
            {showChat.messages.map((message) => (
              <div
                className="chat-message"
                key={message.id}
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}

            <div ref={messageEndRef} />
          </div>

          <form className="bottom" onSubmit={handleSubmit}>
            <textarea
              className="text-area"
              name="text"
              placeholder="Type a message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

const MessageCard = ({ chat, setShowChat, showChat }) => {
  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (chatId, chatReceiver) => {
    try {
      const response = await apiRequest.get(`/chats/${chatId}`);
      setShowChat({ ...response.data, chatReceiver });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div
      className="message"
      onClick={() => handleOpenChat(chat.id, chat.receiver)}
      style={{
        backgroundColor:
          chat.seenBy.includes(currentUser.id) || showChat?.id === chat.id
            ? "white"
            : "#fecd514e",
      }}
    >
      <img
        src={chat.receiver.avatar || "/noavatar.jpg"}
        alt={chat.receiver.username || "user-pic"}
      />
      <div className="message-content">
        <span>{chat.receiver.username}</span>
        <em>{chat.lastMessage}</em>
      </div>
    </div>
  );
};
