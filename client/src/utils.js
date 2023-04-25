export const shuffleArray = (array) => {
  const shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
};

export const capitalize = (string) => {
  const firstLetter = string.slice(0, 1).toUpperCase();
  return firstLetter + string.slice(1);
};

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}
