import styled from "styled-components";

const SongLibraryContainer = styled.div`

  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;

`;

const RemoveButton = styled.button`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.danger};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export { SongLibraryContainer, RemoveButton  };