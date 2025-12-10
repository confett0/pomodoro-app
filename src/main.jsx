import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/kumbh-sans';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
