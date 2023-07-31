import Wrapper from "../assets/wrappers/ErrorPage.js";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not-found" className="img" />
        <h3 css={h3Css}>Ohh! Page Not Found</h3>
        <p css={pCss}>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
