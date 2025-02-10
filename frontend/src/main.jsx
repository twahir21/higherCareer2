import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './Global.css'
import App from './App.jsx';


// Import jQuery, Bootstrap JS & AdminLTE JS
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "admin-lte/dist/js/adminlte.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </StrictMode>,
)
