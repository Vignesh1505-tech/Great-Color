import React from 'react'

const Note = ({addonsData}) => {
  return (
    <div className={`${addonsData.length === 3 ? "w[100%]" : "w-[65%]"}  border-2  border-gray-300 p-5 `}>
                        <p className='text-center  text-black font-semibold'>Advantages of Digitally printed business cards</p>
                        <div className='text-gray-400 mt-[2%] text-sm'>
                            <p>1. Shorter turnaround.</p>
                            <p>2. Every print is the same. More accurate counts, less waste and fewer variations, due to not having to balance ink and water during press run.</p>
                            <p>3. Cheaper low volume printing - when setup costs are considered, digital printing provides lower per unit costs for very small print runs.</p>

                        </div>
                        <p className='border-b-2 border-gray-300 my-2'> </p>
                        <div className='text-sm'>
                            <p className='text-orange-700 my-2  font-bold'>Important points to note before placing your order:</p>
                            <div>
                                <li>Colors are based on CMYK Digital standards. Print quality is superior and colors are consistent till the last print.</li>
                                <li>We do not guarantee to match the same colors as per your existing business card. Colors may vary from machine to machine and vendor to vendor.</li>
                                <li>There may be some colour variation between what the Client sees on the screen and what the final product looks like. There will be no reprints at the supplier's expense due to colour variations.</li>
                                <li>Pantone colours will not be printed and will automatically be converted to CYMK.</li>
                            </div>

                            <p className='mt-[2%] text-gray-400 italic'>Our friendly staff will help you to design a business card, if you don’t have one already. Simply choose a Business card template on our website - Business cards category and email us the code of the template.</p>
                        </div>
                    </div>
  )
}

export default Note
