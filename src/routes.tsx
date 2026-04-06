import { BrowserRouter, Routes, Route } from 'react-router';

import Login from '@/pages/login';
import Home from '@/pages/home';
import Overview from '@/pages/overview';
import Calendar from '@/pages/calendar';
import Absences from '@/pages/absences';
import Employees from '@/pages/employees';
import Alerts from '@/pages/alerts';
import Reports from '@/pages/reports';
import Approval from '@/pages/approval';
import Audit from '@/pages/audit';
import ProtectedRoute from './layout/protectedroutes';
import AppLayout from './layout/layout';

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/absences" element={<Absences />} />
            <Route path="/approvals" element={<Approval />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/audit" element={<Audit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


