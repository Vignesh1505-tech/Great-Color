import React from 'react'
import Head from '../../components/Common/Head'

export default function Home() {
  return (
    <div className='bg-black flex-1 h-[100vh] flex justify-center items-center'>
        <Head text={"Welcome"} className={"text-blue-300"}/>
    </div>
  )
}
