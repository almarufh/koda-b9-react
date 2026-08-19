import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UsersProvider from './context/UsersProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </StrictMode>
)