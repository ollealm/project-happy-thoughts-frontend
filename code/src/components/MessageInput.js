import React, { useState } from "react";
import { RadioInput } from "./RadioInput";
import "./messageInput.css";

export const MessageInput = ({ setMessages, url }) => {
  const [postedMessage, setPostedMessage] = useState("");
  const [postedName, setPostedName] = useState();
  const [postedTag, setPostedTag] = useState();

  const handelSubmit = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: postedMessage,
        name: postedName,
        tag: postedTag,
      }),
    })
      .then((res) => res.json())
      .then((newMessage) => {
        setMessages((previousMessages) => [newMessage, ...previousMessages]);
      });
  };

  return (
    <div className="thought input">
      <h1 className="input-text">
        What's making you <br />
        happy right now?
      </h1>
      <form onSubmit={handelSubmit}>
        <textarea
          rows="3"
          value={postedMessage}
          onChange={(event) => setPostedMessage(event.target.value)}
        />
        <p className={postedMessage.length > 140 ? "to-long" : ""}>
          {" "}
          {Math.abs(140 - postedMessage.length)} characters{" "}
          {postedMessage.length < 140 ? "left" : "too long"}{" "}
        </p>
        <RadioInput setPostedTag={setPostedTag} />
        <input
          type="text"
          className="nameinput"
          placeholder="Name"
          onChange={(event) => setPostedName(event.target.value)}
        />
        <input
          title={
            postedMessage.length < 5
              ? "Minimum 5 characters"
              : "Post your thought"
          }
          type="submit"
          disabled={
            postedMessage.length < 5 || postedMessage.length > 140
              ? true
              : false
          }
          className="form-button"
          value="Send thought!"
        />
      </form>
    </div>
  );
};
