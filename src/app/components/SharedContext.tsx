'use client';
import React, { createContext, useContext, useState } from 'react';

interface SharedContextProps {
  sharedState: { activeRow: number };
  setSharedState: React.Dispatch<React.SetStateAction<{ activeRow: number }>>;
}

const SharedContext = createContext<SharedContextProps>({
  sharedState: { activeRow: 0 },
  setSharedState: () => {},
});

export function useSharedState() {
  return useContext(SharedContext);
}

export function SharedProvider({ children }: { children: React.ReactNode }) {
  const [sharedState, setSharedState] = useState({ activeRow: 0 });

  return (
    <SharedContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedContext.Provider>
  );
}
