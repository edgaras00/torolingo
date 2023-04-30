const Choice = ({ choiceState, value, onOptionChange, image }) => {
  return (
    <label
      className={`pic-mc ${image ? "pic-label" : null} 
      ${choiceState === value ? "pic-mc-selected" : null}`}
    >
      {image ? <img src={image} alt="choice option" /> : value}
      <input
        type="radio"
        name={value}
        value={value}
        className="pic-mc-input"
        checked={choiceState === value}
        onChange={onOptionChange}
      />
      {image ? value : null}
    </label>
  );
};

export default Choice;
