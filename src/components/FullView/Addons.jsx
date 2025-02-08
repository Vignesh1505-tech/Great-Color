import React from 'react'
import { addonsData } from '../../constants'
import Head2text from '../Common/Head2text'
import Image from '../Common/Image'
import { FaDownload } from 'react-icons/fa6'
import Bodytext from '../Common/Bodytext'
import Note from './Note'

const Addons = () => {
  return (
    <div className=' gap-10 flex-wrap flex'>
    {addonsData.map((item) => {
        return (<div className='border-2 w-[31%] border-gray-300 p-5'>
            <Head2text text={item.title} className="text-center text-2xl mb-2 font-semibold" />

            <div>
                <Image className="w-[100%] h-[20%]" img={item.image} alt={item.title} />
            </div>

            <div className='flex justify-center'><Bodytext text={item.desc} className="text-center text-gray-400" /></div>

            {item.button !== "" && <div className='flex w-[20 justify-center mt-[2%]  gap-2'>

                {/* <FaDownload  className=''/>
                    <Bodytext text={item.button} className="" /> */}
                <p className='flex items-center border-[1px] px-2 py-1 gap-2 rounded-3xl border-black'> <FaDownload className='' /> {item.button}</p>


            </div>}
         

        </div>)
    })}
    <Note addonsData={addonsData}/>
</div>
  )
}

export default Addons
