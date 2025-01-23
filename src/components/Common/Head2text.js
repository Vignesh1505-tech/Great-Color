import React from 'react'

export default function Head2text({text,className}) {
  return (
    <div>
        <h2 className={`${className}`}>{text}</h2>
    </div>
  )
}
