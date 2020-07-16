import React, { useState, useEffect } from "react";
import { IconButton, FormControl, InputLabel, Input } from "@material-ui/core";
import FlipMove from "react-flip-move";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  console.log(messages);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
      });
  }, []);
  useEffect(() => {
    setUsername(prompt("enter username"));
  }, []);

  const sendMessage = (e) => {
    //all the logic to send message goes here
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        // width="50px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/50px-Facebook_Messenger_logo.svg.png"
        alt=""
      />
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a message ...."
          />

          <IconButton
            disabled={!input}
            className="app_iconButtom"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
