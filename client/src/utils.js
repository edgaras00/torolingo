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

export const handleWordClick = (event, wordBank, setSelected, setWordBank) => {
  const selectedWord = event.target.cloneNode();
  const wordIndex = selectedWord.dataset.position * 1;
  selectedWord.textContent = event.target.textContent;
  selectedWord.setAttribute("data-position", wordIndex);
  setSelected((prevState) => [...prevState, selectedWord]);

  const wordBankCopy = [...wordBank];
  wordBankCopy[wordIndex] = selectedWord.textContent + "*";
  setWordBank(wordBankCopy);
};

export const handleSelectedWordClick = (
  event,
  wordBank,
  setWordBank,
  selected,
  setSelected
) => {
  const word = event.target.textContent;
  const wordIndex = event.target.dataset.position * 1;
  const wordBankCopy = [...wordBank];
  wordBankCopy[wordIndex] = word;
  setWordBank(wordBankCopy);

  const selectedCopy = [...selected];
  const index = selectedCopy.findIndex((arrayWord) => {
    return (
      arrayWord.textContent === word &&
      arrayWord.dataset.position === String(wordIndex)
    );
  });
  selectedCopy.splice(index, 1);
  setSelected(selectedCopy);
};
