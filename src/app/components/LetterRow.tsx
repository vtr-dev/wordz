'use client';
import React from 'react';
import Letter from './Letter';

function LetterRow({
  children,
  status,
}: {
  children?: React.ReactNode;
  status?: string;
}) {
  const letterArray = typeof children === 'string' ? children.split('') : [];

  return (
    <div className={'flex flex-row gap-1'}>
      {letterArray.map((letter, idx) => (
        <Letter status={status} key={idx}>
          {letter}
        </Letter>
      ))}
    </div>
  );
}

export default LetterRow;
