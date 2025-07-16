import styled from "styled-components";


const ResultsContainer = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: #EBFFD8;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
`;

const ResultTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;

const SongBlock = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const AlbumTitle = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export { ResultsContainer, ResultTitle, SongBlock, AlbumTitle };