import React from 'react'

function InputBox({style,type,placeholder}) {
console.log(style,type,placeholder)
function handleValue(){

}

  return (
    <div className=''>
      <input type={type} onChange={handleValue} placeholder={placeholder} 
      className={`${style}  `}/>
    </div>
  )
}

export default InputBox
