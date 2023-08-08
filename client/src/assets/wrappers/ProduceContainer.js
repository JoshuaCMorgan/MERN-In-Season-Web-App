import styled from "styled-components";

const Wrapper = styled.section`
  .description {
    margin-bottom: 1rem;
    line-height: 1.2rem;
  }
  .produce {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(240px, 240px));
    grid-gap: 1.3rem;
    justify-content: center;
    background-color: var(--grey200);
  }

  .center {
    text-align: center;
    margin: 15px;
  }
`;
export default Wrapper;
