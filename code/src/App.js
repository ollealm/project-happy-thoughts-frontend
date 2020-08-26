import React, { useState, useEffect } from "react";
import { MessageList } from "./components/MessageList";
import { MessageInput } from "./components/MessageInput";
import { Loading } from "./components/Loading";
import { Pages } from "./components/Pages";
import "./app.css";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [pages, setPages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const url = `https://olle-happy-thoughts.herokuapp.com/?page=${currentPage}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          // timeout to always show loader
          setMessages(data.thoughts);
          setPages({ pages: data.pages, totalMessages: data.totalResults });
          setLoading(false);
        }, 1500);
      });
  }, [currentPage]);

  return (
    <div className="messageApp">
      <MessageInput setMessages={setMessages} url={url} />
      <Loading loading={loading} />
      <Pages
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages.pages}
        totalMessages={pages.totalMessages}
        loading={loading}
      />
      <MessageList
        messages={messages}
        setMessages={setMessages}
        url={url}
        loading={loading}
      />
    </div>
  );
};
