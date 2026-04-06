import Navbar from '@/layout/navbar'
import { Sidenavbar } from '@/layout/sidebar'
import { SidebarProvider,  } from "@/components/ui/sidebar"
import { Outlet } from 'react-router'


export default function AppLayout() {
  return (
      <SidebarProvider >
       <Sidenavbar/>
      <main className="flex flex-col w-full h-screen overflow-hidden">
            <Navbar/>
            <div className="flex-1 overflow-auto p-4"><Outlet/></div>
        </main>
    </SidebarProvider>
  )
}
