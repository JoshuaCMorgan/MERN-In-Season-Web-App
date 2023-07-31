import Wrapper from "../assets/wrappers/Select";
const Select = ({ cat, label, value, options, onChange }) => {
  return (
    <Wrapper id={cat} value={value} onChange={onChange}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </Wrapper>
  );
};

export default Select;
