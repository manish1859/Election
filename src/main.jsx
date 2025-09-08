import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Parent from './Parent.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <Parent>

      <App />
    </Parent>
    </BrowserRouter>
  </StrictMode>
);
