import Wrapper from "../assets/wrappers/Select";
const FormRowSelect = ({ cat, label, value, list, onChange }) => {
  return (
    <Wrapper>
      {list.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </Wrapper>
  );
};

export default FormRowSelect;
