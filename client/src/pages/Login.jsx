import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <FormRow type="email" name="email" defaultValue="jmorg0605@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/register" className="member-btn">
            Register
          </Link>
          `
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
