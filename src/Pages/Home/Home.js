import React from 'react'
import Head from '../../components/Common/Head'
import SubTitle from '../../components/Common/SubTitle'
import Card from '../../components/Common/Card'
import CardStar from '../../components/Common/CardStar'
import Carousel from '../../components/Common/Curosal'
import ImageCarousel from '../../components/ImageCarousel'
import { banner, BestProd, layout, offeringfeature, TradeShow } from '../../constants/Demo'
import Image from '../../components/Common/Image'
import Bodytext from '../../components/Common/Bodytext'
import { Link } from 'react-router-dom'
import Testimonial from '../../components/Common/Testimonial'

export default function Home() {
  return (
    <div className='items-center justify-center '>
      <div className='px-2 lg:px-24'>
        <ImageCarousel data={banner} showThumbs={true}/>
        <div className='bg-[#F5F8FA] mx-5 lg:mx-7 my-2 p-2 lg:p-4 flex flex-row flex-wrap justify-evenly items-center'>
          {
            offeringfeature.map((item)=>(
              <div className='flex flex-row items-center gap-3 lg:gap-2' key={item.id}>
                <Image img={item.img} alt={item.name} className={"w-8 h-8"} />
                <div className='my-2 w-28 lg:w-auto lg:my-0'>
                  <Bodytext text={item.name} className={"lg:text-sm text-[11px] md:flex-wrap "}/>
                  <Bodytext text={item.data} className={"lg:text-sm text-[12px]"}/>

                  </div>
              </div>
            ))
          }
        </div>
        <Carousel/>
<div className='mx-5 lg:mx-7'>
<Image img={"https://res.cloudinary.com/do0dujhy5/image/upload/v1737731618/canvas_frames_banner_elkaru.webp"} alt={"banner"} className={" w-full z-50  my-5 h-40 lg:h-full "} />

</div>
{/* <div className='mx-5 lg:mx-7'>
  {
    TradeShow.map((item) => (
      <div key={item.id}>
        <SubTitle title={item.title} />
        <div className='grid grid-cols-2 gap-4 my-3 md:grid-cols-4'>
          {
            item.items.map((data) => (
              <div key={data.id}>

{                console.log(data)
}                
                <Card img={data.img} path={item.title==="Floor sticker"?`/${item.text}/${item.data[0].header!== undefined? item.data[0].header:item.data[0].title}`:`sub/${data.name}`} data={data.subproduct} view={true} imgClass={`lg:w-72 h-40 lg:h-64`} text={data.name} />
              </div>
            ))
          }
        </div>
      </div>
    ))
  }
</div> */}

<div className="container flex flex-col p-4 mx-auto h-[100%] lg:gap-5 lg:flex-row">
      <div>
<Link to="">
<Image img={"https://res.cloudinary.com/do0dujhy5/image/upload/v1737871323/pos_display_banner_igga4n.webp"} alt={"banner"} className={" w-full rounded-lg   h-40 lg:h-full "} />
</Link>
      </div>
      <div>
      <Link to="">
<Image img={"https://res.cloudinary.com/do0dujhy5/image/upload/v1737871323/signage_banner_x9wxjz.webp"} alt={"banner"} className={" w-full rounded-lg lg:my-0 lg:mb-3  my-5 h-40 lg:h-full "} />
</Link>
<Link to="">
<Image img={"https://res.cloudinary.com/do0dujhy5/image/upload/v1737871323/neon_signage_un5cfx.webp"} alt={"banner"} className={" w-full rounded-lg  h-40 lg:h-full "} />
</Link>
      </div>
    </div>

{/* <div className='flex flex-col items-center gap-5 lg:flex-row justify-evenly'>
{
    BestProd.map((item) => (
      <div className='mx-auto' key={item.id}>
        <SubTitle title={item.title} />
        <div className='mt-5 bg-gray-100 rounded-lg'>
          {
            item.items.map((data) => (
              <div key={data.id}>
                <Card img={data.img} path={data.path} view={true} imgClass={`lg:w-72 h-40 lg:h-64`} text={data.name} />
                <CardStar data={data.data.subproduct} imgurl={data.img} text={data.name}/>
              </div>
            ))
          }
        </div>
      </div>
    ))
  }
</div> */}
<div className='mx-7'>
<Image img={"https://res.cloudinary.com/do0dujhy5/image/upload/v1737880348/backdrop_banner_jadtsu.webp"} alt={"banner"} className={" w-full z-50  my-5 h-40 lg:h-full "} />

</div>
</div>
<div>
  <Testimonial/>
</div>
        
    </div>
  )
}
