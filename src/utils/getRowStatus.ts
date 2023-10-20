export const getRowStatus = (rowNumber: number, activeRow: number) => {
  if (rowNumber === activeRow) {
    return 'active';
  }
  if (rowNumber < activeRow) {
    return 'done';
  }
  return 'inactive';
};
