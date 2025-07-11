import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routes from './Pages/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
    <App />
    </Routes>
  </StrictMode>,
)
