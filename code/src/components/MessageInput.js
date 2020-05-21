import React, { useState } from 'react'
import './messageInput.css'


export const MessageInput = ({ setMessages, url }) => {

  const [postedMessage, setPostedMessage] = useState([]);

  const handelSubmit = (event) => {
    event.preventDefault();
    fetch(url,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: postedMessage })
      })

      .then((res) => res.json())
      .then((newMessage) => {
        setMessages((previousMessages) => [newMessage, ...previousMessages])
      });
  };

  return (
    <div className="thought input">
      <h1 className="input-text">What's making you <br />happy right now?</h1>
      <form onSubmit={handelSubmit}>
        <textarea
          rows="3"
          className="form-text"
          value={postedMessage}
          onChange={event => setPostedMessage(event.target.value)}
        ></textarea>
        <p className={postedMessage.length > 140 ? "to-long" : ""} > {Math.abs(140 - postedMessage.length)} characters {postedMessage.length < 140 ? "left" : "too long"} </p>
        <input
          title={postedMessage.length < 5 ? "Minimum 5 characters" : "Post your thought"}
          type="submit"
          disabled={postedMessage.length < 5 || postedMessage.length > 140 ? true : false}
          className="form-button"
          value="Send thought!">
        </input>
      </form>
    </div >
  )
}
