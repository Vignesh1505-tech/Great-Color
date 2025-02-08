import React from 'react'
import { FrostedSticker } from '../../../constants/Demo'
import ImgGrid from '../../Common/ImgGrid'
import SubTitle from '../../Common/SubTitle'
import Breadcrumb from '../../Common/BreadCrumb'
import Button from '../../Common/Button'

export default function Froster() {
  return (
    <div className="px-5 my-2 lg:px-28">
            <Breadcrumb />
      {FrostedSticker.map((category, index) => (
        <div key={index} className="mb-12">
            {/* <SubTitle title={category.header} className="mx-1 my-2" /> */}
          {category.items.map((item) => (
            <div key={item.id} className="mb-10">

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
              <SubTitle title={item.title} className="mx-1 my-1" />

                                          <ImgGrid data={item.subproduct[0]?.items} />
                </div>
                {/* About Section */}
                {item.subproduct[0]?.About && item.subproduct[0].About.length > 0 && (
                  <div className='px-5' >
            <SubTitle title={"About"} className="my-1 " />
            {
              item?.subproduct[0]?.About.map((item)=>(
                <div key={item.id} className='my-5'>
                                      <p className="text-gray-700">{item.description}</p>
                </div>
              ))
            }
            <Button
                                className="text-[#fff] px-6 py-2 rounded-3xl border bg-[#eb5929]"
                                text="Order Now"
                                onClick={() => console.log(`Order Now for ${item.header}`)}
                              />
                  </div>
                )}
                {item.subproduct[0].Specification && (
                  <div >
            <SubTitle title={"Specifications"} className="my-1 " />
            {
              item?.subproduct[0]?.Specification.map((item)=>(
                <div key={item.id} className='my-5'>
                                      <p className="text-gray-700">{item.details}</p>
                </div>
              ))
            }
            {item.subproduct[0].custom &&

              (
                <div>
                                  <SubTitle title={"Custom Style"} className="my-1 " />
{                item?.subproduct[0]?.custom.length<=1 ?(
  <>
  {item?.subproduct[0]?.custom.map((item)=>(
    <div  className='grid grid-cols-2 gap-2 my-3' key={item.id}>
      <div>
      <img src={item.imgurl} className='object-cover w-40 h-40'/>
      </div>
      <div>
        <span className='my-2 text-2xl text-black tex-left text-bold '>{item.title}</span>
        <p>{item.desc}</p>
      </div>
    </div>
  ))}
  </>
):(
  <div className='grid grid-cols-3 gap-2 my-3'>
  {item?.subproduct[0]?.custom.map((item)=>(
    <div   key={item.id}>
      <div className='flex flex-col items-center justify-start'>
      <span className='my-2 text-xl text-[#eb5929] font-bold  '>{item.title}</span>
      <div>
      <img src={item.imgurl} className='object-cover w-40 h-40'/>
      </div>
      <div className='px-2 my-1'>
        <p className='text-center'>{item.desc}</p>
      </div>
      </div>
    </div>
  ))}
  </div>
)
}                
              </div>)
            }
             <Button
                                className="text-[#fff] px-6 py-2 rounded-3xl border bg-[#eb5929]"
                                text="Order Now"
                                onClick={() => console.log(`Order Now for ${item.header}`)}
                              />
                  </div>
                )}

                {/* Image Grid */}
              
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
