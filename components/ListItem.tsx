import React, { ReactNode } from 'react';

const ListItem = ({ children }: any) => {
  return (
    <>
      <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
        {children}
      </span>
    </>
  );
};

export default ListItem;
