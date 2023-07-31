import styled from "styled-components";

const Wrapper = styled.section`
  .description {
    margin-bottom: 1rem;
    line-height: 1.2rem;
  }
  .items {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(240px, 240px));
    grid-gap: 1.3rem;
    justify-content: center;
    background-color: var(--grey200);
  }
  .item-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border: 1px solid #b7b5b5;
    background-color: var(--grey-200);
    border-radius: 5px;
    width: 240px;
    padding: 1rem;
  }
  .item-container h4 {
    margin-bottom: 0;
  }

  .center {
    text-align: center;
    margin: 15px;
  }
`;
export default Wrapper;
