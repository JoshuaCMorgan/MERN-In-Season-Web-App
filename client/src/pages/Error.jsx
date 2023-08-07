import Wrapper from "../assets/wrappers/ErrorPage.js";
import img from "../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

// export const Error = () => {
//   return (
//     <Wrapper className="full-page">
//       <div>
//         <img src={img} alt="not-found" className="img" />
//         <h3>Ohh! Page Not Found</h3>
//         <p>We can't seem to find the page you're looking for</p>
//         <Link to="/">back home</Link>
//       </div>
//     </Wrapper>
//   );
// };

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>we can&apos;t seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
