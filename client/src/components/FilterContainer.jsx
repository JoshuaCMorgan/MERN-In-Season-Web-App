import Wrapper from "../assets/wrappers/FilterContainer";
import { Form, useSubmit, Link } from "react-router-dom";
import { useState, useRef } from "react";
import FormRowSelect from "./FormRowSelect";
import moment from "moment";
import { SingleDatePicker } from "./SingleDatePicker";
import { PRODUCE_TYPE, STATE_OPTIONS } from "../../../utils/constants";
import { FaChevronCircleDown } from "react-icons/fa";
import { useAllProduceContext } from "../pages/AllProduce";

const FilterContainer = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { filterValues } = useAllProduceContext();
  const { state, type, month } = filterValues;
  const submit = useSubmit();
  const formRef = useRef(null);

  const getFormData = (form) => {
    const formData = new FormData(form);

    if (selectedDate) {
      const month = selectedDate.format("MM/DD");
      formData.append("month", month);
      return formData;
    }

    return formData;
  };

  const onDateSelected = (date, month, year) => {
    const formData = getFormData(formRef.current);

    formData.append("month", `${month}/${date}`);

    submit(formData);

    setSelectedDate(moment(`${year}${month}${date}`));
  };

  return (
    <Wrapper>
      <Form ref={formRef}>
        <div className="filter-container">
          <span className="filter-icon">
            <FaChevronCircleDown />
          </span>

          <FormRowSelect
            name="state"
            list={STATE_OPTIONS}
            defaultValue={month}
            onChange={(e) => {
              submit(getFormData(e.currentTarget.form));
            }}
          />
        </div>
        <div className="filter-container">
          <span className="filter-icon">
            <FaChevronCircleDown />
          </span>

          <FormRowSelect
            name="type"
            list={["Any Produce", ...Object.values(PRODUCE_TYPE)]}
            defaultValue={type}
            onChange={(e) => {
              submit(getFormData(e.currentTarget.form));
            }}
          />
        </div>
        <div className="filter-container">
          <SingleDatePicker
            selectedDate={selectedDate ? selectedDate.format("DDMMYYYY") : ""}
            onDateSelected={onDateSelected}
          />
        </div>
      </Form>
    </Wrapper>
  );
};

export default FilterContainer;
