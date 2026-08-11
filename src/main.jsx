import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Button from './pages/Button.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Button/> */}
  </StrictMode>
)