import WordBubble from "./components/WordBubble";

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

export const handleCheckAnswer = (
  correctSolution,
  userSolution,
  altSolution,
  setResult,
  addMistake
) => {
  if (correctSolution === userSolution || altSolution === userSolution) {
    setResult("success");
    return;
  }
  setResult("failure");
  addMistake();
};

export const createUserSolution = (selectedArray) => {
  const joinedWords = selectedArray
    .map((word) => word.textContent)
    .join(" ")
    .toLowerCase();
  return joinedWords;
};

export const createWordBubbles = (wordBank, setSelected, setWordBank) => {
  return wordBank.map((word, index) => {
    return (
      <WordBubble
        text={word}
        key={index}
        position={index}
        handleClick={(event) =>
          handleWordClick(event, wordBank, setSelected, setWordBank)
        }
        empty={word.includes("*") ? true : false}
      />
    );
  });
};

export const createSelectedWordBubbles = (
  selected,
  wordBank,
  setWordBank,
  setSelected
) => {
  let selectedBubbles = [];
  if (selected.length > 0) {
    selectedBubbles = selected.map((element, index) => {
      const word = element.textContent;
      return (
        <WordBubble
          text={word}
          key={index}
          handleClick={(event) =>
            handleSelectedWordClick(
              event,
              wordBank,
              setWordBank,
              selected,
              setSelected
            )
          }
          position={element.dataset.position}
        />
      );
    });
  }
  return selectedBubbles;
};
