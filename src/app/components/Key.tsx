'use client';
import React from 'react';
import { keyClasses } from '@/utils/keyClasses';

type KeyProps = {
  children: string;
  onClick: (value: string) => void;
};

function Key({ children, onClick }: KeyProps) {
  return (
    <div className={keyClasses(children)} onClick={() => onClick(children)}>
      {children}
    </div>
  );
}

export default Key;
