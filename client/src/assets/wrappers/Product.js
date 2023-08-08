import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-flow:wrap
  box-shadow: var(--shadow-2);

  .content {
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
    /* position: relative; */
  }
  p {
 
  }
  .btn-holder {
    margin-top: auto;
  }
  .content h4 {
    margin-bottom: 0;
  }
`;

export default Wrapper;
