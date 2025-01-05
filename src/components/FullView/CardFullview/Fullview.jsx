import React from 'react'
import Head from '../../Common/Head'
import ImageCarousel from '../../ImageCarousel'
import full1 from '../../../assets/Fullview_image/full_1.webp'
import full2 from '../../../assets/Fullview_image/full_2.webp'
import Bodytext from '../../Common/Bodytext'
import Multiselect from '../../Common/Multiselect'
import { Card_Price, Name } from '../../../constants'
import Button from '../../Common/Button'
import Pricelist from '../Pricelist'

import { FaDownload } from "react-icons/fa6";
import Head2text from '../../Common/Head2text'
import Image from '../../Common/Image'
import Note from '../Note'
import Addons from '../Addons'
import Faq from '../Faq'
import About from '../MoveText'



const Fullview = () => {

    const image = [full1, full2]



    return (
        <div className=' mt-[5%]'>
            <div className='mx-[8%]'>
                <div className='flex gap-2  w-[100%]'>

                    <div className='w-[50%]'>
                        <div className=''>
                            <Head text={"Standard Business Cards"} className="text-xl my-2 inline-block font-semibold text-[#212529] " />
                            <p className="border-b-[3px] border-[#D93800] mb-3 w-[15%]"></p>
                        </div>
                        <div className=''>
                            <ImageCarousel data={image} showThumbs={true} />
                        </div>
                    </div>

                    <Pricelist />
                </div>

                <div className="">
                    <Addons />
                </div>
                <div>
                    <Faq />
                </div>
                <div>
                    <About />
                </div>

            </div>

            <div className='flex flex-col justify-center items-center bg-[#F3F3F3] py-8 mt-[3%]'>
                <Head2text text={"Need Something specific?"} className={"text-2xl font-semibold"}/>
                <Head2text text={"We customize to your needs."} className={"text-2xl font-semibold"} />

                <Button onClick={""} className={"text-white px-6 py-2 rounded-3xl mt-2 bg-[#eb5929]"} text={"Contect Us"} />
            </div>


        </div>
    )
}

export default Fullview
