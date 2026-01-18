import { Archive, BarChart2, Bell, Calendar, CheckCircle, CircleQuestionMark, FilePieChart,  Home,  Settings, TreePalm, Users } from "lucide-react"

export const items = [
 { title: "Home", url: "/", icon: Home },
  { title: "Visão Geral (KPIs)", url: "/overview", icon: BarChart2 },
  { title: "Calendário", url: "/calendar", icon: Calendar },
  { title: "Faltas & Férias", url: "/absences", icon: TreePalm },
  { title: "Aprovações", url: "/approvals", icon: CheckCircle },
  { title: "Funcionários", url: "/employees", icon: Users },
  { title: "Relatórios & Recibos", url: "/reports", icon: FilePieChart },
  { title: "Alertas", url: "/alerts", icon: Bell },
  { title: "Auditoria / Logs", url: "/audit", icon: Archive },
];

export const footer = [
  { title: "Configurações", url: "/settings", icon: Settings },
 {title: "Centro de Ajuda", icon:   CircleQuestionMark,url: "/help",
}
];