import React from 'react';
import Image from './Image';
import { Rating } from '@mui/material';
import { Star, StarBorder, StarBorderRounded, StarRounded } from '@mui/icons-material';

export default function ({ imgurl, text }) {
  return (
    <div className='flex flex-row h-auto p-2 duration-300 cursor-pointer hover:scale-105 w-96'>
      <div >
        <Image img={"https://www.dlxprint.com/images/print&marketing/booklet_printing01.webp"} className={"w-24 h-24 rounded"} />
      </div>
      <div className='flex flex-col ml-5 '>
        <span className='text-[18px]'>{text}</span>
        <Rating
      defaultValue={4.5}
      precision={0.5}
      readOnly
      icon={<StarRounded fontSize={'small'} />} // Custom filled star icon
      emptyIcon={<StarBorderRounded fontSize={'small'} />} // Custom empty star icon
    />      </div>
    </div>
  );
}
