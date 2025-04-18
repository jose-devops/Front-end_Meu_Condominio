import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TelaTipoAcesso from './screens/Login/TipoAcesso.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelaTipoAcesso />
  </StrictMode>,
)
