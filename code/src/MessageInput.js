import React, { useState } from 'react'
import './messageInput.css'


export const MessageInput = () => {

  const url = "https://technigo-thoughts.herokuapp.com/";
  const [message, setMessage] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    fetch(url,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      }
    ).then(() => {
      window.location.reload();
    });

    // ).then((res) => res.json())
    //   .then((newMessage) => {
    //     setMessage((previousThoughts) => [newMessage, ...previousThoughts])
    //   });
  };


  return (
    <div className="thought input">
      <form onSubmit={handelSubmit}>
        <textarea
          rows="3"
          // cols="50"
          className="form-text"
          value={message}
          onChange={event => setMessage(event.target.value)}
        ></textarea>
        <p className={message.length > 140 ? "to-long" : ""} > {Math.abs(140 - message.length)} characters {message.length < 140 ? "left" : "to long"} </p>
        <input
          type="submit"
          disabled={message.length < 5 || message.length > 140 ? true : false}
          className="form-button"
          value="Add message">
        </input>
      </form>
    </div >
  )
}
