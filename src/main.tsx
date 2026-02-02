import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout/layout'
import { Rotas } from '@/routes'
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
       <QueryClientProvider client={queryClient}>
      <Layout children={<Rotas/>}/>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
