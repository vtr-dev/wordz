'use client';
import React from 'react';
import Letter from './Letter';
import { useSharedState } from './SharedContext';

function LetterRow({
  children,
  status,
}: {
  children?: React.ReactNode;
  status?: string;
}) {
  const letterArray = typeof children === 'string' ? children.split('') : [];
  const { sharedState } = useSharedState();
  const { letterPressed } = sharedState;

  return (
    <div className={'flex flex-row gap-1'}>
      {letterArray.map((letter, idx) => (
        <Letter
          status={status}
          key={idx}
          letter={letterPressed}
          word={letterArray}
        >
          {letter}
        </Letter>
      ))}
    </div>
  );
}

export default LetterRow;
