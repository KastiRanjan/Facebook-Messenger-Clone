import React, { forwardRef } from "react";
import "./Message.css";
import { Card, Typography, CardContent, Divider } from "@material-ui/core";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  console.log(isUser);
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent className="message__content">
          <Typography className="message__message" variant="h3" component="h5" color="initial">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
