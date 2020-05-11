import React from 'react'
import { Thought } from 'components/Thought'
import './messageList.css'


export const MessageList = ({ messages, setMessages }) => {

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = messages.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setMessages(updatedThoughts)
  }


  return (
    <div >
      {
        messages.map(message => (
          <Thought
            key={message._id}
            id={message._id}
            message={message.message}
            time={message.createdAt}
            hearts={message.hearts}
            onThoughtLiked={onThoughtLiked} />
        )
        )
      }
    </div>
  )
}