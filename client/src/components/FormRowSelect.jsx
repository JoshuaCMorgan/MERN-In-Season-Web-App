import { useRef } from "react";

const FormRowSelect = ({ name, value, list, onChange, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name}></label>
      <select
        className="form-select"
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((option) => {
          if (option.label) {
            return (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            );
          }

          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
