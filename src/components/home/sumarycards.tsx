import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useHome } from "@/hooks/useHome";
import { Users, UserCheck, UserX, AlertTriangle } from "lucide-react";

export default function HomeSummaryCards() {
  const { stats, isLoading } = useHome();

  const cards = [
    {
      title: "A trabalhar hoje",
      value: stats?.workingToday.length ?? 0,
      description: stats?.workingToday.map(u => u.name.split(" ")[0]).join(", ") || "—",
      icon: UserCheck,
      color: "text-green-500",
    },
    {
      title: "De folga hoje",
      value: stats?.offToday.length ?? 0,
      description: stats?.offToday.map(u => u.name.split(" ")[0]).join(", ") || "—",
      icon: UserX,
      color: "text-amber-500",
    },
    {
      title: "Total activos",
      value: stats?.total ?? 0,
      description: `${stats?.byDepartment.kt.length ?? 0} cozinha · ${stats?.byDepartment.wt.length ?? 0} atendimento · ${stats?.byDepartment.br.length ?? 0} bar`,
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Faltas esta semana",
      value: "—",
      description: "Em breve",
      icon: AlertTriangle,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {cards.map((card) => (
        <Card key={card.title} className="rounded-md">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-7 w-12" />
                <Skeleton className="h-3 w-full" />
              </div>
            ) : (
              <>
                <p className="text-2xl font-bold">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-1 truncate">
                  {card.description}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
