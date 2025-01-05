import React from 'react'

const Multiselect = ({data,className}) => {
 




  return (
    <div>
      <select className={`${className}`}>
        {data.map((item)=>(
            <option className='text-gray-600'>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Multiselect
