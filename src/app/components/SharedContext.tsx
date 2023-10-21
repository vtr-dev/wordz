'use client';
import React, { createContext, useContext, useState } from 'react';

interface SharedContextProps {
  sharedState: {
    activeRow: number;
    activeLetter: number;
    letterPressed: string;
  };
  setSharedState: React.Dispatch<
    React.SetStateAction<{
      activeRow: number;
      activeLetter: number;
      letterPressed: string;
    }>
  >;
}

const SharedContext = createContext<SharedContextProps>({
  sharedState: { activeRow: 0, activeLetter: 0, letterPressed: '' },
  setSharedState: () => {},
});

export function useSharedState() {
  return useContext(SharedContext);
}

export function SharedProvider({ children }: { children: React.ReactNode }) {
  const [sharedState, setSharedState] = useState({
    activeRow: 0,
    activeLetter: 0,
    letterPressed: '',
  });

  return (
    <SharedContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedContext.Provider>
  );
}
