import React from 'react';
import { LetterBoardTable } from '../../../constants';
import TablePrice from '../TablePrice';
import ImageCarousel from '../../ImageCarousel';
import full1 from '../../../assets/Fullview_image/full_1.webp'
import full2 from '../../../assets/Fullview_image/full_2.webp'

const LetterBoardView = () => {
  const image = [full1, full2]
  return (
    <div>

      <div className=' m-4'>
        <div className='w-[50%]'>
          <ImageCarousel data={image} showThumbs={true} />
        </div>

        <div>

        </div>
      </div>
      <div>
        
        <TablePrice data={LetterBoardTable} />
      </div>
    </div>
  );
};

export default LetterBoardView;
