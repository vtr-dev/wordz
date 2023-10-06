import { keyClasses } from '@/utils/keyClasses';
import React from 'react';

function Key({ children }: { children: React.ReactNode }) {
  return <div className={keyClasses(children as string)}>{children}</div>;
}

export default Key;
