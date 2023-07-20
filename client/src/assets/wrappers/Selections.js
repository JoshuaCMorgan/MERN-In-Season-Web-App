import styled from "styled-components";

const Wrapper = styled.section`
  .description {
    margin-bottom: 1rem;
    line-height: 1.2rem;
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
`;
export default Wrapper;
