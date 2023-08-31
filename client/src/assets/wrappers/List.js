import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 1rem;

  h4 {
    font-size: clamp(1.5rem, 3vw, 3rem);
    text-align: center;
    margin-bottom: 1.38rem;
  }

  h5 {
    text-align: center;
  }
  .items > ul {
    padding: 10px 0 50px;
  }
  .items > ul li form {
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  .items > ul li .check {
    height: 30px;
    left: -45px;
    margin: -15px 0 0;
  }
  .items > ul li {
    border-bottom: 1px solid #d7d7d7;
    margin: 0 0 25px 60px;
    padding: 10px 0;
    position: relative;
  }
  .items > ul li .check button {
    background-color: transparent;
    border: 1px solid #666666;
    border-radius: 4px;
    color: transparent;
    cursor: pointer;
    height: 28px;
    width: 28px;
  }

  .items > ul li .delete button {
    background-color: transparent;
    border: none;
    color: transparent;
    cursor: pointer;
    height: 24px;
    width: 24px;
  }

  .items > ul li .delete {
    background: transparent var(--url-delete) 0 3px no-repeat;
    height: 27px;
    margin: -12px 0 0;
    opacity: 0.4;
    right: 20px;
    width: 24px;
  }
  .items > ul li.done .check {
    background: transparent var(--url-check) 50% 50% no-repeat;
  }

  .items > ul li .delete:hover {
    opacity: 1;
  }

  .items > ul li.done h3 {
    color: #bebebe;
    text-decoration: line-through;
  }
`;

export default Wrapper;
