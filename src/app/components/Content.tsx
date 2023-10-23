'use client';

import { useEffect, useState } from 'react';
import { useSharedState } from './SharedStateProvider';
import Letter from './Letter';
import { getRowStatus } from '@/utils/getRowStatus';

function Content({ id }: { id: number }) {
  const { gameWord, matrix, activeRow, activeCol, updateActiveCol } =
    useSharedState();
  const [word, setWord] = useState('');

  useEffect(() => {
    setWord(gameWord[id]);
  }, []);

  const handleLetterClick = (newCol: number) => {
    return () => {
      // Atualiza a coluna ativa
      updateActiveCol(newCol);
    };
  };

  return (
    <div className="flex flex-col gap-1">
      {matrix.map((row, i) => (
        <div key={i} className={'flex flex-row gap-1'}>
          {row.map((letter, j) => (
            <Letter
              key={j}
              id={j}
              letter={word[j]}
              word={word}
              active={activeCol}
              status={getRowStatus(i, activeRow)}
              onClick={handleLetterClick(j)}
            >
              {letter}
            </Letter>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Content;
