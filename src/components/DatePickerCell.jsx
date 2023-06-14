/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const backgroundSelection = {
  black: {
    backgroundColor: "black",
    color: "white",
  },
  white: {
    backgroundColor: "white",
  },
};

const Cell = styled.div(
  {
    border: "1px solid #eee",
    position: "relative",
    height: "100%",
    minHeight: "40px",

    ":hover": {
      backgroundColor: "#eee",
    },
  },
  (props) => {
    {
      return props.isSelected
        ? [
            backgroundSelection["black"],
            { ":hover": { backgroundColor: "black", color: "white" } },
          ]
        : backgroundSelection["white"];
    }
  }
);

export const DatePickerCell = ({ isSelected, dateNumber = "" }) => {
  return <Cell isSelected={isSelected}>{dateNumber}</Cell>;
};
