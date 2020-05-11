import React from 'react'
import './loading.css'

export const Loading = ({ loading }) => {
  return (
    <>
      {loading && <p className="loading">Loading messages </p>}
    </>
  )
}
