import React from "react";
import '../css/components/commentbox.css'
function CommentBox({userName,message,messageTime}) {
  return (
    <>
      <div className="chats">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p id="name">{userName}</p>
            <p>{message}</p>
          </div>

          <p style={{ marginTop: "3%" }}>{messageTime}</p>
        </div>
      </div>
    </>
  );
}

export default CommentBox;
