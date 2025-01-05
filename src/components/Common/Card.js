import React from 'react'
import Image from './Image'

export default function Card({img,text,imgClass,alt,view,textClass}) {
  return (
    <div className={`flex flex-col w-64 h-auto ${view?'border-b border-gray-500':"border-b-0"}  p-2`}>
        <Image img={img} alt={alt} className={imgClass}/>
        <span className={`${textClass} text-[20px] font-semibold text-black`}>{text}</span>
        {view && <span className='text-[16px] text-orange-400'>View more</span>}
    </div>
  )
}
