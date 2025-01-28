import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

export default function Card({img,text,imgClass,alt,view,textClass,path,list,btnClass,data}) {

  return (
    <div className={`flex flex-col w-auto h-auto ${list && "justify-center h-64 items-center"} ${view?'border-b border-gray-500':"border-b-0"} my-2`}>
        <Image img={img} alt={alt} className={imgClass}/>
        <span className={`${textClass} ${list?" text-[10px] lg:text-[16px]":'text-[16px] lg:text-[20px]'} font-semibold text-black`}>{text}</span>
        
        {view &&
        <Link to={path} state={{data:data}} className={`mb-4  ${btnClass}`}>
        <span className={`text-[10px] lg:text-[16px]  ${!list?"text-orange-400":"text-black hover:text-white"} `}>View more</span>
        </Link>}
    </div>
  )
}
