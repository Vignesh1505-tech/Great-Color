import React from 'react'

export default function Bodytext({text,className}) {
  return (
    <div>
        <p className={`${className}`}>{text}</p>
    </div>
  )
}
