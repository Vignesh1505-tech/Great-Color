import React from 'react';
import { LetterBoardTable } from '../../../constants';
import TablePrice from '../TablePrice';

const LetterBoardView = () => {
  return (
    <div>
        <div>
            <TablePrice data={LetterBoardTable}/>
        </div>
    </div>
  );
};

export default LetterBoardView;
