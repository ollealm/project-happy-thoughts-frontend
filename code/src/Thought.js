import React from 'react'
import moment from 'moment'
import './thought.css'



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
      window.location.reload(); //slow, add local 
    });
  }

  return (
    <div className="thought">
      <p className="message">
        {message}
      </p>
      <span className="hearth">{hearts > 5 ? "💚 × " + hearts : '💚'.repeat(hearts)}</span>
      <span className="time">{moment(time).fromNow()}</span>
      <button onClick={handleLike}><span role='img' aria-label='heart'> {'💚'}</span></button>
    </div>
  )
}
