import React from "react";
import Head2text from "../Common/Head2text";
import Bodytext from "../Common/Bodytext";

const Submenu = ({ data, title }) => {
 
  const column1 = data.slice(0, 2);
  const column2 = data.slice(2, 6); 
  const column3 = data.slice(6);    

  const columns = [column1, column2, column3];

  return (
    <div >
      <Head2text text={title} className="mb-4" />
      <div className="grid grid-cols-3 gap-0">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {column.map((menu, menuIndex) => (
              <div key={menuIndex}>
                <Head2text text={menu.header} className="font-bold mb-2" />
                <div>
                  {menu.items.map((item, itemIndex) => (
                    <Bodytext key={itemIndex} text={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
