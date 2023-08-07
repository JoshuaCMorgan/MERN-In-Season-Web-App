import Wrapper from "../assets/wrappers/Selections";
const SelectionContainer = ({ produce }) => {
  return (
    <Wrapper>
      <h1 className="center">Your Selection: </h1>
      <ul className="items">
        {produce.map((item, idx) => {
          return (
            <li key={idx} className="item-container">
              <h4>{item.name}</h4>
              <figure>
                <img src="" alt="" />
              </figure>
              <p className="description">{item.desc}</p>
              <button type="button" className="btn">
                Add to Shopping List
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default SelectionContainer;
