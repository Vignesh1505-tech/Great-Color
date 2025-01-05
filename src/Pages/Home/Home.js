import React from 'react'
import Head from '../../components/Common/Head'
import SubTitle from '../../components/Common/SubTitle'
import Card from '../../components/Common/Card'
import CardStar from '../../components/Common/CardStar'
import Carousel from '../../components/Common/Curosal'

export default function Home() {
  return (
    <div className='bg- flex-1 h-[100vh] justify-center items-center'>
        {/* <Head text={"Welcome"} className={"text-blue-300"}/> */}
        {/* <SubTitle title={"Heading"}/> */}
        {/* <Card img={"https://www.dlxprint.com/images/print&marketing/booklet_printing01.webp"}  imgClass={`w-64 h-64`}  text={"Paper"} />
        <CardStar text="Scrf"/> */}
        <Carousel/>
    </div>
  )
}
