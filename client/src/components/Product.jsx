import Wrapper from "../assets/wrappers/Product";

const Product = ({ name, desc }) => {
  return (
    <Wrapper>
      <div className="content">
        <h4>{name}</h4>
        <figure>
          <img src="" alt="" />
        </figure>
        <p className="description">{desc}</p>
        <div className="btn-holder">
          <button type="button" className="btn">
            Add to Shopping List
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;
