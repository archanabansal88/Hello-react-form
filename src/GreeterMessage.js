import React from 'react'

export const GreeterMessage = ({ name, message }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>{message}</p>
    </div>
  )
}
