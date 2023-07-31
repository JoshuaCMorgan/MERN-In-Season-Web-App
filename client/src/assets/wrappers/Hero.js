import styled from "styled-components";

const Wrapper = styled.section`
  /* height: clamp(10rem, 2.2414rem + 33.1034vw, 25rem); */
  display: flex;
  justify-content: center;
  align-items: center;

  .banner {
    text-align: center;
    color: var(--clr-white);
    padding: 1rem;
    background: white;
    border-radius: 25px;
  }

  .banner h1 {
    text-transform: uppercase;
  }
  .scroll-container p {
    max-width: 35rem;
    margin-left: auto;
    margin-right: auto;
    color: var(--black);
    letter-spacing: var(--spacing);
  }
`;

export default Wrapper;
