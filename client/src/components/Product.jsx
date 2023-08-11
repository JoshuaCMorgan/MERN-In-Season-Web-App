import Wrapper from "../assets/wrappers/Product";
import { Form } from "react-router-dom";

const Product = ({ name, desc, type }) => {
  const handleClick = () => {
    console.log(name, type);
  };
  return (
    <Wrapper>
      <div className="content">
        <h4>{name}</h4>

        <figure>
          <img src="" alt="" />
        </figure>
        <p className="description">{desc}</p>
        <div className="btn-holder">
          <Form method="post" action="../add-item">
            <label htmlFor={name}></label>
            <input
              name="name"
              id={name}
              className="hide"
              readOnly
              type="text"
              value={name}
            />
            <label htmlFor={type}></label>
            <input
              name="type"
              id={type}
              className="hide"
              readOnly
              type="text"
              value={type}
            />
            <button type="submit" className="btn">
              Add to Shopping List
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;
