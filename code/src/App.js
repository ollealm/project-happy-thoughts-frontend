import React, { useState, useEffect } from "react";
import { MessageList } from "./components/MessageList";
import { MessageInput } from "./components/MessageInput";
import { Loading } from "./components/Loading";
import { Pages } from "./components/Pages";
import "./app.css";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [pages, setPages] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const url = "https://olle-happy-thoughts.herokuapp.com/";

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
          setPages({ pages: data.pages, total: data.totalResults });
          setLoading(false);
        }, 1500);
      });
  }, []);

  return (
    <div className="messageApp">
      <MessageInput setMessages={setMessages} url={url} />
      <Pages
        setPage={setPage}
        page={page}
        pages={pages.pages}
        total={pages.total}
        loading={loading}
      />
      <Loading loading={loading} />
      <MessageList messages={messages} setMessages={setMessages} url={url} />
    </div>
  );
};
