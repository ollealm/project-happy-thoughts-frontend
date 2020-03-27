import React from 'react'
import moment from 'moment'
import './thought.css'



export const Thought = ({ id, message, time, hearts, onThoughtLiked }) => {
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
      onThoughtLiked(id)
    });
  }


  return (
    <div className="thought">
      <p className="message">
        {message}
      </p>
      <button onClick={handleLike}></button>
      <div className="bottom-container">
        <span className="hearth">{hearts > 7 ? "💚 × " + hearts : '💚'.repeat(hearts)}</span>
        <span className="time">{moment(time).fromNow()}</span>
      </div>
    </div>
  )
}
