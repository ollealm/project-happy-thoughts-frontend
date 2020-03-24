import React from 'react'
import moment from 'moment'


export const Thought = ({ id, message, time, hearts }) => {
  const url = "https://technigo-thoughts.herokuapp.com/" + id + "/like"
  console.log(url)

  const handleLike = (event) => {
    event.preventDefault();
    fetch(url,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      window.location.reload();
    });
  }

  return (
    <div>
      <p className="message">
        {message}
        <span className="time">{moment(time).fromNow()}</span>
        <span className="hearth">{hearts}</span>
      </p>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}
