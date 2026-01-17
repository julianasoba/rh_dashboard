import { Archive, BarChart2, Bell, Calendar, CheckCircle, CircleQuestionMark, FilePieChart, FileText, Home,  Settings, TreePalm, Users } from "lucide-react"

export const items = [
 { title: "Home", url: "/", icon: Home },
  { title: "Visão Geral (KPIs)", url: "/overview", icon: BarChart2 },
  { title: "Calendário", url: "/calendar", icon: Calendar },
  { title: "Faltas & Justificações", url: "/absences", icon: FileText },
  { title: "Férias", url: "/vacations", icon: TreePalm},
  { title: "Aprovações", url: "/approvals", icon: CheckCircle },
  { title: "Funcionários", url: "/employees", icon: Users },
  { title: "Relatórios", url: "/reports", icon: FilePieChart },
  { title: "Alertas", url: "/alerts", icon: Bell },
  { title: "Auditoria / Logs", url: "/audit", icon: Archive },
];

export const footer = [
  { title: "Configurações", url: "/settings", icon: Settings },
 {title: "Centro de Ajuda", icon:   CircleQuestionMark,url: "/help",
}
];