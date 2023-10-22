'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SharedState {
  matrix: string[][];
  activeRow: number;
  activeCol: number;
  updateMatrix: (newMatrix: string[][]) => void;
  updateActiveRow: (newActiveRow: number) => void;
  updateActiveCol: (newActiveCol: number) => void;
}

const SharedStateContext = createContext<SharedState>({
  matrix: [],
  activeRow: 0,
  activeCol: 0,
  updateMatrix: () => {},
  updateActiveRow: () => {},
  updateActiveCol: () => {},
});

// Componente que fornece o estado compartilhado
export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const initialMatrix = Array.from({ length: 6 }, () => Array(5).fill(''));
  const [matrix, setMatrix] = useState(initialMatrix);
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);

  // Funções para atualizar o estado
  const updateMatrix = (newMatrix: string[][]) => setMatrix(newMatrix);
  const updateActiveRow = (newActiveRow: number) => setActiveRow(newActiveRow);
  const updateActiveCol = (newActiveCol: number) => setActiveCol(newActiveCol);

  return (
    <SharedStateContext.Provider
      value={{
        matrix,
        activeRow,
        activeCol,
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
