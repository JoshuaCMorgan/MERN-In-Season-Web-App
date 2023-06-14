export const getDaysInMonth = (monthMoment) => {
  const monthCopy = monthMoment.clone();
  monthCopy.startOf("month");

  let days = [];

  while (monthCopy.month() === monthMoment.month()) {
    days.push(monthCopy.clone());
    monthCopy.add(1, "days");
  }

  return days;
};

export const segmentIntoWeeks = (dayMoments) => {
  let weeks = [];
  let currentWeek = [];

  for (let day of dayMoments) {
    currentWeek.push(day.clone());

    if (day.format("dddd") === "Saturday") {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
};

export const daysOfTheWeek = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Sat",
];

export const padWeekFront = (week, padWidth = null) => {
  return [...Array(7 - week.length).fill(padWidth), ...week];
};

export const padWeekBack = (week, padWidth = null) => {
  return [...week, ...Array(7 - week.length).fill(padWidth)];
};
