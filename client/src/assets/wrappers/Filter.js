import styled from "styled-components";

const Wrapper = styled.section`
  padding: 25px;
  padding-bottom: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 610px) {
    padding-top: 5px;
    margin: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filter-container {
    position: relative;
    padding: 7px;
    flex: 1 1 auto;
    max-width: 300px;
    min-width: 200px;
    @media (max-width: 610px) {
      width: 275px;
    }
  }
  .filter-icon {
    position: absolute;
    top: 16px;
    left: 80%;
    font-size: 25px;
    font-weight: 200;
  }
`;

export default Wrapper;
