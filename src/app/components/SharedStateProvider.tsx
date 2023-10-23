'use client';
import { words } from '@/utils/words';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SharedState {
  gameWord: string[];
  matrix: string[][];
  activeRow: number;
  activeCol: number;
  updateGameWord: (newGameWord: string[]) => void;
  updateMatrix: (newMatrix: string[][]) => void;
  updateActiveRow: (newActiveRow: number) => void;
  updateActiveCol: (newActiveCol: number) => void;
}

const SharedStateContext = createContext<SharedState>({
  gameWord: [''],
  matrix: [],
  activeRow: 0,
  activeCol: 0,
  updateGameWord: () => {},
  updateMatrix: () => {},
  updateActiveRow: () => {},
  updateActiveCol: () => {},
});

const getRandWord = () => words[Math.floor(Math.random() * words.length)];

// Componente que fornece o estado compartilhado
export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const initialMatrix = Array.from({ length: 6 }, () => Array(5).fill(''));
  const initialGameWord = Array.from({ length: 4 }, () => getRandWord());
  const [gameWord, setGameWord] = useState(initialGameWord);
  const [matrix, setMatrix] = useState(initialMatrix);
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);

  // Funções para atualizar o estado
  const updateGameWord = (newGameWord: string[]) => setGameWord(newGameWord);
  const updateMatrix = (newMatrix: string[][]) => setMatrix(newMatrix);
  const updateActiveRow = (newActiveRow: number) => setActiveRow(newActiveRow);
  const updateActiveCol = (newActiveCol: number) => setActiveCol(newActiveCol);

  return (
    <SharedStateContext.Provider
      value={{
        gameWord,
        matrix,
        activeRow,
        activeCol,
        updateGameWord,
        updateMatrix,
        updateActiveRow,
        updateActiveCol,
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

// Hook para acessar o estado compartilhado
export const useSharedState = () => {
  return useContext(SharedStateContext);
};
