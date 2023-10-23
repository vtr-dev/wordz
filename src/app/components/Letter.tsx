import { removeAccents } from '@/utils/removeAccents';
import React from 'react';

type LetterProps = {
  children?: React.ReactNode;
  active?: number;
  status?: string;
  letter: string;
  word: string;
  id: number;
  onClick?: () => void;
};

function Letter({
  children, // Letra correta
  active,
  status,
  letter,
  word,
  id,
  onClick,
}: LetterProps) {
  const commonClasses =
    'rounded-lg w-14 h-14 flex justify-center items-center box-border uppercase font-bold text-xl cursor-pointer';

  let classNames = commonClasses;

  if (status === 'active') {
    classNames += ' bg-transparent text-white border-[0.2em] border-[#4C4347]';
    if (id === active) {
      classNames += ' border-b-[0.4em]';
    }
  } else if (status === 'done') {
    classNames += ` ${
      removeAccents(letter) === (children as string).toLowerCase()
        ? 'bg-[#3AA394]'
        : removeAccents(word).includes((children as string).toLowerCase())
        ? 'bg-[#D3AD69]'
        : 'bg-[#312A2C]'
    } text-white border-[0.125em] border-[#615458]`;
  } else if (status === 'inactive') {
    classNames +=
      ' bg-[#615458] text-[#615458] border-[0.125em] border-[#615458]';
  }

  return (
    <span onClick={onClick} className={classNames}>
      {(children as string).toLowerCase() ===
      removeAccents(letter?.toLowerCase())
        ? letter?.toUpperCase()
        : children}
    </span>
  );
}

export default Letter;
