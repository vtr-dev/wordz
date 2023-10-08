const handlesubmit = () => {
  console.log('submit');
};

const handleDel = () => {
  console.log('del');
};

export const script = (letter: string) => {
  if (letter === 'ENTER') {
    handlesubmit();
    return;
  }

  if (letter === 'DEL') {
    handleDel();
    return;
  }

  const a = document.getElementById('home');
  if (!a) return;
  a.innerText = letter;
};
