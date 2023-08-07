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
    background: var(--grey-100);
    border-radius: 25px;
  }

  .banner h1 {
    text-transform: uppercase;
  }

  .animate-container {
    /* background-color: var(--primary-100); */
    height: 40px;
    overflow: hidden;
    text-align: center;
    margin-top: 1rem;
  }

  ul {
    margin-top: 10px;
  }

  li {
    font-weight: 500;
    font-size: 1.5rem;
    padding: 0 10px;
    height: 45px;
    margin-bottom: 45px;
    display: block;
  }

  .animate-text {
    display: inline-block;
    animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2);
  }

  @keyframes flip3 {
    0% {
      margin-top: -220px;
      opacity: 0;
    }
    5% {
      margin-top: -170px;
      opacity: 1;
    }

    8% {
      margin-top: -170px;
      opacity: 1;
    }
    32% {
      margin-top: -170px;
      opacity: 1;
    }
    33% {
      margin-top: -170px;
      opacity: 0;
    }

    38% {
      margin-top: -80px;
      /* opacity: 0; */
    }
    64% {
      margin-top: -80px;
      opacity: 1;
    }
    66% {
      margin-top: -80px;
      opacity: 0;
    }

    71% {
      margin-top: 10px;
      /* opacity: 1; */
    }
    100% {
      margin-top: 10px;
    }
  }
`;

export default Wrapper;
