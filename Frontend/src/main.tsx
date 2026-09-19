import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Landing from './Landing-page-items/Landing'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Landing/>
   
  </StrictMode>,
)
