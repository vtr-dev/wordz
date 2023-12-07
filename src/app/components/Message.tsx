'use client';
import { useSharedState } from './SharedStateProvider';

function Message() {
  const { message, messageActive } = useSharedState();

  return (
    <div className="flex justify-center items-center h-[5%]">
      <div
        className={`flex justify-center items-center w-fit px-2 text-center rounded-md text-xl ${
          messageActive
            ? 'bg-blue-600 text-white'
            : 'bg-[#6E5C62] text-[#6E5C62]'
        }`}
      >
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default Message;
