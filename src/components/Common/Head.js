import React from 'react'

export default function Head({text,className}) {
  return (
    <div>
        <h1 className={`${className}`}>{text}</h1>
    </div>
  )
}
