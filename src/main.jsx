import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import Contextapi from './context/ContextApi.jsx'
import TokenContext from './context/TokenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 

    <Contextapi>
      <TokenContext>
      <App />
      </TokenContext>
    </Contextapi> 

    </BrowserRouter>
  </StrictMode>,
)
