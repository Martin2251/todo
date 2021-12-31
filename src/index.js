import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
  <ChakraProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
