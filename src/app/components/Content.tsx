'use client';

import { words } from '@/utils/words';
import LetterRow from './LetterRow';
import { useEffect, useState } from 'react';
import { useSharedState } from './SharedContext';
import { getRowStatus } from '@/utils/getRowStatus';

function Main() {
  const [word, setWord] = useState('');
  const { sharedState } = useSharedState();
  const { activeRow } = sharedState;
  const maxRows = 6; // ou outra quantidade desejada

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const rows = Array.from({ length: maxRows }, (_, index) => index);

  return (
    <div className="flex flex-col gap-2">
      {rows.map((rowNumber) => (
        <LetterRow key={rowNumber} status={getRowStatus(rowNumber, activeRow)}>
          {word}
        </LetterRow>
      ))}
    </div>
  );
}

export default Main;
