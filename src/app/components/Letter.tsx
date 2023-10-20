import React from 'react';

type LetterProps = {
  children?: React.ReactNode;
  status?: string;
};

function Letter({ children, status }: LetterProps) {
  const commonClasses =
    'rounded-lg w-14 h-14 flex justify-center items-center box-border uppercase border-[0.125em] border-[#615458] font-bold text-xl text-white';

  let classNames = commonClasses;

  if (status === 'active') {
    classNames +=
      ' bg-transparent text-[#6E5C62] border-[0.2em] border-[#4C4347]';
  } else if (status === 'done') {
    classNames += ' bg-[#312A2C]';
  } else if (status === 'inactive') {
    classNames += ' bg-[#615458] text-[#615458]';
  }

  return <span className={classNames}>{children}</span>;
}

export default Letter;
