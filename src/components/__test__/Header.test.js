
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header/index.jsx';
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../theme/GlobalStyle.js';
import Theme from '../../theme/index.js';


describe('Header', () => {
  test('muestra el título de la aplicación', () => {
    render(
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Header />
      </ThemeProvider>
    );
    const text = screen.getByText('Mi Biblioteca Musical');
    expect(text).toBeInTheDocument();
  });

  test('no muestra contenido adicional', () => {
    render(
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Header />
      </ThemeProvider>
    );
    const header = screen.getByRole('banner');
    expect(header.childNodes.length).toBe(1);
  });
});
