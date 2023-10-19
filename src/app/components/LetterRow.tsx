'use client';
import React from 'react';
import Letter from './Letter';

function LetterRow({
  children,
  active,
}: {
  children?: React.ReactNode;
  active?: boolean;
}) {
  const letterArray = typeof children === 'string' ? children.split('') : [];

  return (
    <div className={`flex${active ? ' flex-row gap-1' : ''}`}>
      {letterArray.map((letter, idx) => (
        <Letter key={idx}>{letter}</Letter>
      ))}
    </div>
  );
}

export default LetterRow;
