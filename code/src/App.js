import React, { useState, useEffect } from 'react'
import { MessageList } from './components/MessageList'
import { MessageInput } from './components/MessageInput'
import { Loading } from './components/Loading'
import './app.css'

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true)
  const url = "https://technigo-thoughts.herokuapp.com/";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        setTimeout(() => { // timeout to always show loader
          setMessages(data);
          setLoading(false)
        }, 1500)
      });
  }, []);

  return (
    <div className="messageApp">

      <MessageInput
        setMessages={setMessages} />

      <Loading loading={loading} />

      <MessageList
        messages={messages}
        setMessages={setMessages} />

    </div >
  )
}