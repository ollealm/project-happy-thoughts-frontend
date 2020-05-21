import React from 'react'
import moment from 'moment'
import './message.css'

export const Message = ({ id, name, message, time, hearts, theme, onThoughtLiked, url }) => {
  url = `${url}${id}/like`

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
    <div className={`thought ${theme}`} >
      <p className="message">
        {message}
        <span className="name">{name}</span>
      </p>
      <button onClick={handleLike}></button>
      <div className="bottom-container">
        <span className="hearth">{hearts > 7 ? `💚 × ${hearts}` : '💚'.repeat(hearts)}</span>
        <span className="time">{moment(time).fromNow()}</span>
      </div>
    </div >
  )
}
