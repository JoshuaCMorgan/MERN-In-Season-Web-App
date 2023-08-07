import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 25rem;
  margin-top: 70px;
  background-color: var(--primary-500);
  background: linear-gradient(
      rgba(245, 247, 247, 0.4),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    var(--url) center/cover no-repeat;
`;

export default Wrapper;
