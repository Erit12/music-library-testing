import styled from "styled-components";

const DetailContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 700px;
  margin: 0 auto;
  background-color:${({ theme }) => theme.colors.highlight};
  border-radius: ${({ theme }) => theme.borderRadius};

`;

const SongContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color:${({ theme }) => theme.colors.title};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 5px auto;
`;

const AlbumImage = styled.img`
  display: block;
  margin: ${({ theme }) => theme.spacing.medium} auto;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const PreviousPage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const AlbumTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const AddButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export { DetailContainer, AlbumImage, AlbumTitle, AddButton, SongContainer, PreviousPage }