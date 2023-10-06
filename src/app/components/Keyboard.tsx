import { keys } from '@/utils/keys';
import Key from './Key';

function Keyboard() {
  return (
    <div className="grid grid-rows-3 grid-cols-32 gap-1 px-2 max-w-[720px] pb-[0.3rem] my-0 mx-auto w-full h-[25%] box-border ">
      {keys.map((key, index) => (
        <Key key={index}>{key}</Key>
      ))}
    </div>
  );
}

export default Keyboard;
