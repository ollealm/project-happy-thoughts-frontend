import React, { useState, useEffect } from 'react'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))

  }, [])

  return (
    <div >
      {/* {thoughts.map(thought => (
        < div key={thought._id} > {thought.message} </div>
      ))
      } */}
      <MessageInput />
      <MessageList />

    </div >
  )
}