import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout/layout'
import { Rotas } from '@/routes'
import { ThemeProvider } from "@/context/ThemeContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Layout children={<Rotas/>}/>
    </ThemeProvider>
  </StrictMode>,
)
