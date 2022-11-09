import React, { ReactNode } from 'react';

const ListItem = ({ children }: any) => {
  return (
    <>
      <span className="flex items-center px-3 py-1 m-2 space-x-2 border-2 duration-30 bg-zinc-50 dark:bg-neutral-800 border-opacity-10 border-greyText rounded-xl">
        {children}
      </span>
    </>
  );
};

export default ListItem;
