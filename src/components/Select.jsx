const Select = ({ cat, label, value, options, onChange }) => {
  return (
    <select id={cat} value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
