import React from 'react'
import Head from '../../components/Common/Head'
import ImageCarousel from '../../components/ImageCarousel'
import { Home_images } from '../../constants'



export default function Home() {
  return (
    <div className="mx-[8%] mt-[2%]">
        <ImageCarousel showThumbs={false}  data={Home_images}/>
    </div>
  )
}
