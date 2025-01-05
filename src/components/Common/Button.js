import React from 'react'

export default function Button({click,className,text}) {
  return (
    <div>
        <button onClick={click} className={`${className}`}>{text}</button>
    </div>
  )
}
