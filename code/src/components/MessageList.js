import React from 'react'
import { Message } from 'components/Message'
import './messageList.css'


export const MessageList = ({ messages, setMessages, url }) => {

  // add hearts locally for instant UX response
  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = messages.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.likes += 1
      }
      return thought
    })
    setMessages(updatedThoughts)
  }


  return (
    <div >
      {
        messages.map(message => (
          <Message
            key={message._id}
            id={message._id}
            name={message.name}
            message={message.message}
            time={message.createdAt}
            hearts={message.likes}
            theme={message.tag}
            onThoughtLiked={onThoughtLiked}
            url={url} />
        )
        )
      }
    </div>
  )
}