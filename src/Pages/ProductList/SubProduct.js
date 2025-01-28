import React from 'react'
import { useLocation } from 'react-router-dom';
import SubTitle from '../../components/Common/SubTitle';
import Card from '../../components/Common/Card';
import Breadcrumb from '../../components/Common/BreadCrumb';

export default function SubProduct() {
    const location = useLocation(); // Access the state passed via Link
    const { state } = location || {};
    let header = location.pathname.replace(/\//g, "");

    console.log(state)


  return (
    <div>
    <div className='px-5 lg:px-24'>
<Breadcrumb/>
        <div>
        {
            state.data.map((item)=>(
<div key={item.id} className='my-5'>
            <SubTitle title={item.header!==""?item.header:header} className={"mx-1"} />
            <div className='grid grid-cols-2 gap-4 my-3 md:grid-cols-4'>
              {
                item.items.map((data) => (
                  <div key={data.id}>
                    <Card img={data.imgurl} view={true} list={true} imgClass={`lg:w-72 h-40 w-52 lg:h-64`} textClass={"text-center my-3 "} btnClass={"border border-black px-4 py-2 hover:bg-slate-600 rounded-full"} text={data.title} />
                  </div>
                ))
              }
            </div>

</div>
            ))
        }
        </div>
        
    </div>
    <div className='w-full h-full bg-gray-300'>

    </div>
    </div>
  )
}
