import Wrapper from "../assets/wrappers/FilterContainer";
import { Form, useSubmit, Link } from "react-router-dom";
import { useState } from "react";
import FormRowSelect from "./FormRowSelect";
import moment from "moment";
import { SingleDatePicker } from "./SingleDatePicker";
import { PRODUCE_TYPE, STATE_OPTIONS } from "../../../utils/constants";
import { FaChevronCircleDown } from "react-icons/fa";
import { useAllProduceContext } from "../pages/AllProduce";

const FilterContainer = () => {
  const { data } = useAllProduceContext();
  const submit = useSubmit();
  // const onDateSelected = (date, month, year) => {
  //   setSelectedDate(moment(`${year}${month}${date}`));
  //   let data = {
  //     state: state,
  //     type: type,
  //     month: `${month}/${date}`,
  //   };

  //   filterProduce(data);
  // };

  return (
    <Wrapper>
      <Form>
        <div className="filter-container">
          <span className="filter-icon">
            <FaChevronCircleDown />
          </span>

          <FormRowSelect
            name="state"
            list={STATE_OPTIONS}
            defaultValue="Select A State"
            onChange={(e) => {
              submit(e.currentTarget.form);
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
            defaultValue="Any Produce"
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
        </div>
        {/* <div className="filter-container">
          <SingleDatePicker
            selectedDate={selectedDate ? selectedDate.format("DDMMYYYY") : ""}
            onDateSelected={onDateSelected}
          />
        </div> */}
      </Form>
    </Wrapper>
  );
};

export default FilterContainer;
