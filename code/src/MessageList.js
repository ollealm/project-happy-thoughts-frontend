import React, { useState, useEffect } from 'react'
import { Thought } from 'Thought'
import './messageList.css'


export const MessageList = () => {
  // useState
  const url = "https://technigo-thoughts.herokuapp.com/";
  const [messages, setMessages] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        //Set the state
        const filteredData = data.filter(message => {
          return message.message !== "My sad thought";
        });
        // filteredData.reverse();
        setMessages(filteredData);
      });

  }, []);


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