import React, { useState, useEffect } from 'react'
import { MessageList } from './components/MessageList'
import { MessageInput } from './components/MessageInput'
import { Loading } from './components/Loading'
import { Pages } from './components/Pages'
import './app.css'

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [pages, setPages] = useState({});
  const [loading, setLoading] = useState(true)
  const url = "https://olle-happy-thoughts.herokuapp.com/";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        setTimeout(() => { // timeout to always show loader
          setMessages(data.thoughts);
          setPages({ pages: data.pages, total: data.total })
          setLoading(false)
        }, 1500)
      });
  }, []);

  return (
    <div className="messageApp">

      <MessageInput
        setMessages={setMessages}
        url={url} />

      <Pages pages={pages.pages} total={pages.total} />

      <Loading loading={loading} />

      <MessageList
        messages={messages}
        setMessages={setMessages}
        url={url} />

    </div >
  )
}