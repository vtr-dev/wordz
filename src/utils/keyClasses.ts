export const keyClasses = (key: string) => {
  return `touch-action-manipulation outline-none bg-key flex text-key-base leading-key-base m-0 justify-center items-center rounded-lg font-bold cursor-pointer border-none text-white ${
    {
      A: 'col-2-span-3',
      DEL: 'col-30-span-3',
      Z: 'col-3-span-3',
      ENTER: 'col-25-span-8 text-key-enter leading-key-enter',
    }[key as string] || 'col-span-3'
  }`;
};
