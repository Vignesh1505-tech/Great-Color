import React from 'react'

export default function SubTitle({title,className}) {
  return (
    <div className={`${className} ${title===""?"h-8":"h-auto"}`}>
        <h2 className="text-[20px] font-medium tracking-wider text-black ">{title}</h2>
        <div className={`w-[15%] lg:w-[40px] h-[3px] ${title !==""?'bg-orange-500':""}`}/>
    </div>
  )
}
