import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar/index.jsx';
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../../theme/GlobalStyle.js';
import Theme from '../../theme/index.js';
import { Provider } from 'react-redux';
import store from '../../redux/store.js';
import { jest } from '@jest/globals';


describe('SearchBar', () => {
  
  test('el input se renderiza correctamente', () => {
    render(
      <Provider store={ store }>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <SearchBar setSearchTerm={''} />
      </ThemeProvider>
      </Provider>
    );
    expect(screen.getByPlaceholderText('Busca un artista...')).toBeInTheDocument();
  });

  test('el usuario puede escribir en el input', () => {
    render(
      <Provider store={ store }>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <SearchBar setSearchTerm={''} />
      </ThemeProvider>
      </Provider>
    );
    const input = screen.getByPlaceholderText('Busca un artista...');
    fireEvent.change(input, { target: { value: 'rock' } });
    expect(input.value).toBe('rock');
  });
/*
  test ('prueba favil', ()=>{
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
*/

  test('se ejecuta la búsqueda al hacer clic en "Buscar"', () => {
    const mockSearch = jest.fn();
    
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <SearchBar onSubmit={mockSearch} />
        </ThemeProvider>
      </Provider>
    );

    const inputValue = 'Adele';
    
    // Simular entrada de texto
    const inputElement = screen.getByPlaceholderText('Busca un artista...');
    fireEvent.change(inputElement, { target: { value: inputValue } });
    
    // Verificar que los elementos están presentes
    const buttonByText = screen.getByText('Buscar');
    expect(buttonByText).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    
    // Simular clic en el botón
    fireEvent.click(buttonByText);
    
    // Verificar que mockSearch fue llamado con el valor correcto
    expect(mockSearch).toHaveBeenCalledWith(inputValue);
    // También puedes verificar cuántas veces fue llamado
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });  
});