import Navbar from '@/layout/navbar'
import { Sidenavbar } from '@/layout/sidebar'
import { SidebarProvider,  } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <SidebarProvider >
       <Sidenavbar/>
       <main className="flex flex-col w-full h-screen">
            <Navbar/>
            <div className="flex-1 overflow-auto p-4">{children}</div>
        </main>
    </SidebarProvider>
  )
}
