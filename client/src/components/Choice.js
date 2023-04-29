const Choice = ({ choiceState, value, onOptionChange }) => {
  return (
    <label
      className={`pic-mc ${choiceState === value ? "pic-mc-selected" : null}`}
    >
      {value}
      <input
        type="radio"
        name={value}
        value={value}
        className="pic-mc-input"
        checked={choiceState === value}
        onChange={onOptionChange}
      />
    </label>
  );
};

export default Choice;
