'use client';

import { useEffect, useState } from 'react';
import { useSharedState } from './SharedStateProvider';
import { words } from '@/utils/words';
import Letter from './Letter';
import { getRowStatus } from '@/utils/getRowStatus';

function Content() {
  const { matrix, activeRow, activeCol, updateActiveCol } = useSharedState();
  const [word, setWord] = useState('');

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const handleLetterClick = (newCol: number) => {
    return () => {
      // Atualiza a coluna ativa
      updateActiveCol(newCol);
    };
  };

  return (
    <div className="flex flex-col gap-2">
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
