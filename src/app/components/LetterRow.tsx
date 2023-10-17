import React from 'react';
import MainLetter from './Letter';

function MainRow({ children }: { children?: React.ReactNode }) {
  const letterArray = typeof children === 'string' ? children.split('') : [];

  return (
    <div className="flex flex-row gap-1">
      {letterArray.map((letter, idx) => (
        <MainLetter key={idx}>{letter}</MainLetter>
      ))}
    </div>
  );
}
export default MainRow;
