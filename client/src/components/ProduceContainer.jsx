import Wrapper from "../assets/wrappers/ProduceContainer";
import { useAllProduceContext } from "../pages/AllProduce";
import Product from "./Product";

const ProduceContainer = () => {
  const { data } = useAllProduceContext();
  const { produce } = data;
  if (produce.length === 0) {
    return (
      <Wrapper>
        <h2>No Produce to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1 className="center">Your Selection: </h1>
      <div className="produce">
        {produce.map((item) => {
          return <Product key={item._id} {...item}></Product>;
        })}
      </div>
    </Wrapper>
  );
};

export default ProduceContainer;
