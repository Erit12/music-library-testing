import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  gap: ${({ theme }) => theme.spacing.small};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  width: 250px;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #BCF2F6;
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &::placeholder {
    color:rgb(85, 145, 230);
  }
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.highlight};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export { Form, Input, Button }