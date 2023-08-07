import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: var(--white);
  box-shadow: var(--dark-shadow);

  .nav-center {
    @media (min-width: 800px) {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    @media (min-width: 991px) {
      padding: 0;
    }
  }

  .image {
    background-image: url(../assets/images/myLogo.svg)
  }
  .logo {
    height: 40px;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--primary-500);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    @media (min-width: 800px) {
      display: none;
    }
  }

  .nav-toggle:hover {
    color: var(--primary-700);
    transform: rotate(90deg);
  }

  .links-container {
    overflow: hidden;
    transition: var(--transition);
    background-color: var(--white-transparent);
    @media (min-width: 800px) {
      height: auto !important;
      padding: 5px;
    }
  }

  .links {
    @media (min-width: 800px) {
      display: flex;
      gap: 1.5rem;
    }
  }

  .links a {
    display: block;
    padding: 0.5rem 1rem;
    color: var(--grey-700);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);

    @media (min-width: 800px) {
      padding: 0;
    }
  }
  .links a:hover {
    background: var(--primary-100);
  color: var(--primary-500);
  padding-left: 1.5rem;
  @media (min-width: 800px) {
    background: transparent;
    padding-left: 0;
  },
  }
`;

export default Wrapper;
