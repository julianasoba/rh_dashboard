import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home";
import Overview from "@/pages/overview";
import Calendar from "@/pages/calendar";
import Absences from "@/pages/absences";
import Employees from "@/pages/employees";
import Alerts from "@/pages/alerts";
import Reports from "@/pages/reports";
import Approval from "@/pages/approval";
import Audit from "@/pages/audit";

export function Rotas(){
  return (
 <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
       <Route path="/overview" element={<Overview/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/absences" element={<Absences/>} />
        <Route path="/approvals" element={<Approval/>} />
         <Route path="/employees" element={<Employees/>} />
           <Route path="/reports" element={<Reports/>} />
            <Route path="/alerts" element={<Alerts/>} />
            <Route path="/audit" element={<Audit/>} />
    </Routes>
  </BrowserRouter>
  )
}



