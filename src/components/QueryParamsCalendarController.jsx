import { useLocation, useNavigate } from "react-router-dom";
import { Calendar } from "./Calendar";
import moment from "moment";
import { useState } from "react";

export const QueryParamsCalendarController = () => {
  const { search } = useLocation(); // string with all query params: {pathname: '/', search: '?m=06y&=2023', hash: '', state: null, key: 'default'}
  const navigate = useNavigate();
  const month = new URLSearchParams(search).get("m");
  const year = new URLSearchParams(search).get("y");
  const today = moment();

  const [currentMonthMoment, setCurrentMonthMoment] = useState(
    month && year ? moment(`${month}${year}`, "MMYYYY") : today
  );

  const incrementMonth = () => {
    const newMonth = moment(currentMonthMoment.add(1, "months"));
    navigate(`?m=${newMonth.format("MM")}&y=${newMonth.format("YYYY")}`);
    setCurrentMonthMoment(newMonth);
  };

  const decrementMonth = () => {
    const newMonth = moment(currentMonthMoment.subtract(1, "months"));
    navigate(`?m=${newMonth.format("MM")}&y=${newMonth.format("YYYY")}`);
    setCurrentMonthMoment(newMonth);
  };

  return (
    <Calendar
      month={currentMonthMoment.format("MM")}
      year={currentMonthMoment.format("YYYY")}
      onNext={incrementMonth}
      onPrev={decrementMonth}
    />
  );
};
