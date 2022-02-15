import '@Styles/index.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from '@Pages/_app';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
