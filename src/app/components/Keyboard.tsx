'use client';

import { keys } from '@/utils/keys';
import Key from './Key';
import { useSharedState } from './SharedStateProvider';
import { words } from '@/utils/words';
import { removeAccents } from '@/utils/removeAccents';

export const wordsWithoutAccents = words.map((word) =>
  removeAccents(word.toLowerCase()),
);
function Keyboard() {
  const {
    gameWord,
    matrix,
    activeRow,
    activeCol,
    updateMatrix,
    updateActiveRow,
    updateActiveCol,
    updateMessage,
    updateMessageActive,
  } = useSharedState();

  const handleEnterClick = () => {
    if (matrix[activeRow].join('').length < 5) {
      updateMessage('A palavra deve ter 5 letras!');
      updateMessageActive(true);
      return;
    }

    if (
      !wordsWithoutAccents.includes(matrix[activeRow].join('').toLowerCase())
    ) {
      updateMessage('A palavra não existe!');
      updateMessageActive(true);
      return;
    }

    if (
      matrix[activeRow].join('').toLowerCase() === removeAccents(gameWord[0])
    ) {
      updateActiveRow(activeRow + 1);
      alert('Parabéns, você acertou!');
      return;
    }

    updateActiveRow(activeRow + 1);
    updateActiveCol(0);
  };

  const handleClick = (letter: string) => {
    if (letter === 'ENTER') {
      handleEnterClick();
      return;
    }

    if (letter === 'DEL' || letter === 'BACKSPACE') {
      updateMessageActive(false);

      // Atualiza a matriz (substitui por uma nova matriz)
      const newMatrix = [...matrix];

      newMatrix[activeRow][activeCol] = '';

      updateMatrix(newMatrix); // Atualiza a matriz compartilhada

      if (activeCol === 0) return;

      updateActiveCol(activeCol - 1);

      return;
    }

    updateMessageActive(false);

    if (activeCol === 4) {
      // Atualiza a matriz (substitui por uma nova matriz)
      const newMatrix = [...matrix];

      newMatrix[activeRow][activeCol] = letter;

      updateMatrix(newMatrix); // Atualiza a matriz compartilhada
      return;
    }

    // Atualiza a matriz (substitui por uma nova matriz)
    const newMatrix = [...matrix];

    newMatrix[activeRow][activeCol] = letter;

    updateMatrix(newMatrix); // Atualiza a matriz compartilhada
    updateActiveCol(activeCol + 1);
  };

  return (
    <div className="grid grid-rows-3 grid-cols-32 gap-1 px-2 max-w-[720px] pb-[0.3rem] my-0 mx-auto w-full h-[25%] box-border ">
      {keys.map((key, index) => (
        <Key key={index} onClick={handleClick}>
          {key}
        </Key>
      ))}
    </div>
  );
}

export default Keyboard;
