// Version 1

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// Version 2

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "@/components/ui/provider"
import theme from './theme';
import { AuthProvider } from './contexts/AuthContext';

// import { AuthProvider } from './contexts/AuthContext';
// import { CartProvider } from './contexts/CartContext';

import App from './App.tsx';
import './index.css';
//import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider >
        <AuthProvider>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
            <App />
            </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);