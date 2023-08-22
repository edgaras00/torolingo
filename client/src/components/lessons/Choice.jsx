import "../../styles/choice.css";

const Choice = ({ choiceState, value, onOptionChange, image }) => {
  return (
    <label
      className={`picture-mc ${image ? "picture-label" : "word-label"} 
      ${choiceState === value ? "picture-mc-selected" : null}`}
    >
      {image ? <img src={image} alt="choice option" /> : value}
      <input
        type="radio"
        name={value}
        value={value}
        className="picture-mc-input"
        checked={choiceState === value}
        onChange={onOptionChange}
      />
      {image ? value : null}
    </label>
  );
};

export default Choice;
