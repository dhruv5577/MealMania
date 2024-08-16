import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContentProvider from './Store/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContentProvider>
    <App />
    </StoreContentProvider>
    
  </StrictMode>,
)
