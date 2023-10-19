'use client';

import { words } from '@/utils/words';
import LetterRow from './LetterRow';
import { useEffect, useState } from 'react';
import { useSharedState } from './SharedContext';

function Main() {
  const [word, setWord] = useState('');
  const { sharedState } = useSharedState();

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {[0, 1, 2, 3, 4, 5].map((rowNumber) => (
        <LetterRow key={rowNumber} active={sharedState.activeRow === rowNumber}>
          {word}
        </LetterRow>
      ))}
    </div>
  );
}

export default Main;
