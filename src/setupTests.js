const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Opcional: Configuración adicional para testing-library
import '@testing-library/jest-dom';