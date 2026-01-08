import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Components/Form";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Form/>
  </StrictMode>,
)
