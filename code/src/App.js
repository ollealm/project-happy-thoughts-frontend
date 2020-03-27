import React, { useState, useEffect } from 'react'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'
import './app.css'

export const App = () => {
  const [messages, setMessages] = useState([]);
  const url = "https://technigo-thoughts.herokuapp.com/";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        setMessages(data);
      });
  }, []);

  return (
    <div className="messageApp">

      <MessageInput
        setMessages={setMessages} />

      <MessageList
        messages={messages}
        setMessages={setMessages} />

    </div >
  )
}