import React, { useState } from 'react'

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
        body: JSON.stringify({ message: message })
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
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        className="form-text"
        onChange={event => setMessage(event.target.value)}
      >
      </input>
      <input
        type="submit"
        className="form-button"
        value="Add message">
      </input>
    </form >
  )
}
