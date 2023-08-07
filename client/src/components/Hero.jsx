import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper>
      <div className="banner">
        <h1>What's In Season: </h1>
        <div className="scroll-container">
          <p>...in your state</p>
          <p>...right now</p>
          <p>...at your market</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
