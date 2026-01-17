import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home";
import Overview from "@/pages/overview";
import Calendar from "@/pages/calendar";
import Absences from "@/pages/absences";
import Employees from "@/pages/employees";

export function Rotas(){
  return (
 <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
       <Route path="/overview" element={<Overview/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/absences" element={<Absences/>} />
         <Route path="/employees" element={<Employees/>} />
    </Routes>
  </BrowserRouter>
  )
}



