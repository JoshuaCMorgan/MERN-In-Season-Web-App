/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import moment from "moment";
import { Calendar } from "./Calendar";
import { DatePickerCell } from "./DatePickerCell";
import { DropdownWindow } from "./DropdownWindow";

const Container = styled.div({
  position: "relative",
});

const DateInput = styled.input({
  cursor: "pointer",
  padding: ".85em",
  borderRadius: "4px",
  width: "100%",
});
const CalendarContainer = styled.div({
  height: "fit-content",
  width: "fit-content",
});

export const SingleDatePicker = ({ selectedDate, onDateSelected }) => {
  const selectedDateMoment = selectedDate && moment(selectedDate, "DDMMYYYY");
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);
  const today = moment();
  const [currentMonthMoment, setCurrentMonthMoment] = useState(today);

  const incrementMonth = () => {
    const newMonth = moment(currentMonthMoment.add(1, "months"));
    setCurrentMonthMoment(newMonth);
  };

  const decrementMonth = () => {
    const newMonth = moment(currentMonthMoment.subtract(1, "months"));
    setCurrentMonthMoment(newMonth);
  };

  return (
    <Container>
      <DateInput
        readOnly
        onClick={() => setShouldShowDropdown(true)}
        value={
          selectedDateMoment ? selectedDateMoment.format("MM/DD/YYYY") : ""
        }
        placeholder={today.format("MM/DD/YYYY")}
      />
      <DropdownWindow
        shouldShow={shouldShowDropdown}
        onRequestClose={() => {
          setShouldShowDropdown(false);
        }}
      >
        <CalendarContainer>
          <Calendar
            getCellProps={(day, month, year) => {
              const dayMoment = moment(`${day}${month}${year}`, "DDMMYYYY");

              return {
                isSelected:
                  selectedDateMoment &&
                  dayMoment.isSame(selectedDateMoment, "date"),
              };
            }}
            onCellClicked={(day, month, year) => {
              onDateSelected(day, month, year);
              setShouldShowDropdown(false);
            }}
            month={currentMonthMoment.format("MM")}
            year={currentMonthMoment.format("YYYY")}
            onNext={incrementMonth}
            onPrev={decrementMonth}
            cellComponent={DatePickerCell}
          />
        </CalendarContainer>
      </DropdownWindow>
    </Container>
  );
};
