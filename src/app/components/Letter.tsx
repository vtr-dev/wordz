import React from 'react';

type LetterProps = {
  children?: React.ReactNode;
  status?: string;
};

function Letter({ children, status }: LetterProps) {
  const commonClasses =
    'rounded-lg w-12 h-12 flex justify-center items-center box-border uppercase bg-transparent border-[0.125em] border-[#4C4347] font-bold text-xl text-white';

  let classNames = commonClasses;

  if (status === 'active') {
    classNames += ' bg-transparent';
  } else if (status === 'done') {
    classNames += ' bg-green-300 text-black';
  } else if (status === 'inactive') {
    classNames += ' bg-[#4C4347] text-[#4C4347]';
  }

  return <span className={classNames}>{children}</span>;
}

export default Letter;
