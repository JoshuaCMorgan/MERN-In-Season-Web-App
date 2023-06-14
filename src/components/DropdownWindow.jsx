/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
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
  left: "50%",
  right: "50%",
  zIndex: "2",
  marginLeft: "-270px",
  marginTop: "100px",
  "@media (max-width: 991px)": {
    marginLeft: "-180px",
  },
});

export const DropdownWindow = ({ children, shouldShow, onRequestClose }) => {
  const windowRef = useRef(null);

  return (
    <>
      {shouldShow && (
        <>
          <TransparentBackground onClick={onRequestClose}>
            <Window ref={windowRef} onClick={(e) => e.stopPropagation()}>
              {children}
            </Window>
          </TransparentBackground>
        </>
      )}
    </>
  );
};
