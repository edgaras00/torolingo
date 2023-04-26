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

export const setRequestOptions = (method, body) => {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

export const getUnitAndLesson = (pathString) => {
  const splitStringArray = pathString.replace("/", "").split("l");
  const unit = splitStringArray[0].slice(1);
  const lesson = splitStringArray[1];
  return [unit, lesson];
};

export const unlockCircle = (user, unit, lesson) => {
  if (
    user.progress[unit] !== undefined &&
    user.progress[unit][lesson] !== undefined
  ) {
    return user.progress[unit][lesson] >= 60;
  }
  return false;
};

export const unlockRoute = (user, unit, lesson) => {
  if (unit === 1 && lesson === 1) return true;
  if (unit !== 1 && lesson === 1) return unlockCircle(user, unit - 1, 6);

  return unlockCircle(user, unit, lesson - 1);
};
