import styled from "styled-components";

const Headers = styled.header`
  background-color:${({ theme }) => theme.colors.title};
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
`;

export { Headers };