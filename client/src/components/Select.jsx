/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const Select = ({ cat, label, value, options, onChange }) => {
  return (
    <select css={selectCss} id={cat} value={value} onChange={onChange}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const selectCss = css({
  appearance: "none",
  padding: "0.7em",
  borderRadius: "4px",
  width: "100%",
  fontSize: "1rem",
});

export default Select;
