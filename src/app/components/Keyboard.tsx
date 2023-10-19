'use client';

import { keys } from '@/utils/keys';
import Key from './Key';
import { useSharedState } from './SharedContext';

function Keyboard() {
  const { sharedState, setSharedState } = useSharedState();

  const handleEnterClick = () => {
    setSharedState({ ...sharedState, activeRow: sharedState.activeRow + 1 });
  };

  const handleClick = (letter: string) => {
    if (letter === 'ENTER') {
      handleEnterClick();
      return;
    }

    if (letter === 'DEL') {
      return;
    }
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
