'use client';

function MainLetter({ children }: { children: React.ReactNode }) {
  return (
    <span className=" rounded-lg w-12 h-12 flex justify-center items-center box-border uppercase bg-transparent border-[0.125em] border-gray-700 font-semibold text-xl">
      {children}
    </span>
  );
}

export default MainLetter;
