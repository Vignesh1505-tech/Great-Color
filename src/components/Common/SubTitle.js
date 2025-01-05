import React from 'react'

export default function SubTitle({title,className}) {
  return (
    <div className={`${className}`}>
        <h2 className="text-[20px] font-medium tracking-wider text-black ">{title}</h2>
        <div className='w-[15%] lg:w-[4%] h-[3px] bg-orange-500 '/>
    </div>
  )
}
