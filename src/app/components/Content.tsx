import { words } from '@/utils/words';
import MainRow from './LetterRow';

function Main() {
  const word = words[Math.floor(Math.random() * words.length)];
  return (
    <div className="flex flex-col gap-2">
      <MainRow>{word}</MainRow>
      <MainRow>{word}</MainRow>
      <MainRow>{word}</MainRow>
      <MainRow>{word}</MainRow>
      <MainRow>{word}</MainRow>
      <MainRow>{word}</MainRow>
    </div>
  );
}

export default Main;
