/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const TransparentBackground = styled.div({
  position: "fixed",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "transparent",
});

const Window = styled.div({
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0px 5px 15px #aaa",
  padding: "20px",
  width: "fit-content",
  position: "absolute",
  zIndex: "2",
});

export const DropdownWindow = ({ children, shouldShow, onRequestClose }) => {
  return (
    <>
      {shouldShow && (
        <>
          <TransparentBackground onClick={onRequestClose} />
          <Window onClick={(e) => e.stopPropagation()}>{children}</Window>
        </>
      )}
    </>
  );
};
