/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import moment from "moment";
import {
  getDaysInMonth,
  segmentIntoWeeks,
  daysOfTheWeek,
  padWeekBack,
  padWeekFront,
} from "./util";

const CalendarControls = styled.div({
  margin: "auto",
  maxWidth: "400px",
  textAlign: "center",
  button: {
    width: "45%",
    margin: "0 2%",
  },
});

const CalendarTable = styled.div({
  height: "85%",
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
const CalendarRow = styled.div({
  display: "flex",
  flex: "1",
});

const CalendarHeading = styled.div({
  display: "flex",
  flexDirection: "row",
});

const CalendarHeadingCell = styled.div({
  flex: "1",
  textAlign: "center",
});

const CalendarCellWrap = styled.div({
  padding: "0px",
  flex: "1",
});

const CalendarCell = styled.div({
  border: "1px solid #eee",
  position: "relative",
  height: "100%",

  ":hover": {
    backgroundColor: "#eee",
  },
});

/** 
@param {month} String 2 numerial characters representing month
@param {year} String 4 numerial characters representing year
**/

export const Calendar = ({ month, year, onNext, onPrev }) => {
  const currentMonthMoment = moment(`${month}${year}`, "MMYYYY");

  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

  return (
    <>
      <div
        css={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <div css={{ height: "15%" }}>
          <CalendarControls>
            <h1>{currentMonthMoment.format("MMMM YYYY")}</h1>
            <button onClick={onPrev}>previous</button>
            <button onClick={onNext}>next</button>
          </CalendarControls>
        </div>

        <CalendarTable>
          <CalendarHeading>
            {daysOfTheWeek.map((day) => (
              <CalendarHeadingCell key={day}>{day}</CalendarHeadingCell>
            ))}
          </CalendarHeading>

          {weeks.map((week, idx) => {
            let displayWeek;
            if (idx === 0) {
              displayWeek = padWeekFront(week);
            } else if (idx === weeks.length - 1) {
              displayWeek = padWeekBack(week);
            } else {
              displayWeek = week;
            }

            return (
              <CalendarRow key={idx}>
                {displayWeek.map((dayMoment, jdx) => (
                  <CalendarCellWrap key={`0${idx}${jdx}`}>
                    {dayMoment ? (
                      <CalendarCell key={dayMoment.format("D")}>
                        {dayMoment.format("D")}
                      </CalendarCell>
                    ) : (
                      <CalendarCell key={`${idx}${jdx}`}> </CalendarCell>
                    )}
                  </CalendarCellWrap>
                ))}
              </CalendarRow>
            );
          })}
        </CalendarTable>
      </div>
    </>
  );
};
