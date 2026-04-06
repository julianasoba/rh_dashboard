import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Rotas } from '@/routes'
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
       <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Rotas/>
    </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
