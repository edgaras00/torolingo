import WordBubble from "./components/WordBubble";

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

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export const normalizeSolution = (solution) => {
  return solution
    .replace(/[^\w\s\u00C0-\u00FF]/g, "")
    .toLowerCase()
    .replace(/ +/g, " ");
};

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

export const getSelectedWord = (event) => {
  const selectedWord = event.target.cloneNode();
  const wordIndex = selectedWord.dataset.position * 1;
  selectedWord.textContent = event.target.textContent;
  selectedWord.setAttribute("data-position", wordIndex);
  return [selectedWord, wordIndex];
};

export const handleWordClick = (event, wordBank, setSelected, setWordBank) => {
  const [selectedWord, wordIndex] = getSelectedWord(event);
  setSelected((prevState) => [...prevState, selectedWord]);

  const wordBankCopy = [...wordBank];
  wordBankCopy[wordIndex] = selectedWord.textContent + "*";
  setWordBank(wordBankCopy);
};

export const deselectWord = (event, wordBank) => {
  const word = event.target.textContent;
  const wordIndex = event.target.dataset.position * 1;
  const wordBankCopy = [...wordBank];
  wordBankCopy[wordIndex] = word;
  return [wordBankCopy, word, wordIndex];
};

export const handleSelectedWordClick = (
  event,
  wordBank,
  setWordBank,
  selected,
  setSelected
) => {
  // const word = event.target.textContent;
  // const wordIndex = event.target.dataset.position * 1;
  // const wordBankCopy = [...wordBank];
  // wordBankCopy[wordIndex] = word;
  const [wordBankCopy, word, wordIndex] = deselectWord(event, wordBank);
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

export const modifyMatchPairs = (pairs) => {
  const modifiedPairs = pairs.map((pair) => {
    pair.matched = false;
    pair.err = false;
    return pair;
  });
  return modifiedPairs;
};

export const getEnglishWords = (pairs) => {
  const englishWords = pairs.map((pair, index) => ({
    word: pair.english,
    index,
    err: false,
  }));
  return englishWords;
};

export const getSpanishWords = (pairs) => {
  const spanishWords = pairs.map((pair, index) => ({
    word: pair.spanish,
    index,
    err: false,
  }));
  return spanishWords;
};

export const createMatchWords = (pairs) => {
  const modifiedPairs = modifyMatchPairs(pairs);
  const englishWords = shuffleArray(getEnglishWords(modifiedPairs));
  const spanishWords = shuffleArray(getSpanishWords(modifiedPairs));
  return [modifiedPairs, englishWords, spanishWords];
};

export const playAudioOnMount = (audioHasPlayedRef, audioSrc) => {
  if (!audioHasPlayedRef.current) {
    const initialAudio = new Audio(audioSrc);
    setTimeout(() => {
      initialAudio.play();
    }, 1000);
  }
  audioHasPlayedRef.current = true;
};
