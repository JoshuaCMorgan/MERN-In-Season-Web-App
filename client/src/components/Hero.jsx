import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper>
      <div className="banner">
        <h1>What's In Season: </h1>
        <div className="animate-container">
          <ul className="animate-text">
            <li>...right now</li>
            <li>...at your market</li>
            <li>...in your state</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
