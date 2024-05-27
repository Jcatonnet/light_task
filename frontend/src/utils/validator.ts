export const isValidAmount = (value: string): boolean => {
  return /^\d*$/.test(value);
};

export const convertToNumber = (value: string): number => {
  return Number(value);
};
