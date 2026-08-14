import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useHome } from "@/hooks/useHome";
import { getInitials } from "@/utils/splitname";

const departmentLabel: Record<string, string> = {
  kt: "Cozinha",
  wt: "Atendimento",
  br: "Bar",
};

const departmentColor: Record<string, string> = {
  kt: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  wt: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  br: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default function TodaySchedule() {
  const { stats, isLoading } = useHome();

  return (
    <Card className="col-span-4 rounded-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Escala de Hoje
          </CardTitle>
          <span className="text-xs text-muted-foreground">
            {new Intl.DateTimeFormat("pt-PT", { dateStyle: "full" }).format(new Date())}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            ))}
          </div>
        ) : stats?.workingToday.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-6">
            Nenhum colaborador com turno hoje.
          </p>
        ) : (
          <div className="divide-y">
            {stats?.workingToday.map((user) => (
              <div
                key={user.email}
                className="flex items-center gap-3 py-2.5"
              >
                <span className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold shrink-0">
                  {getInitials(user.name)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {user.workSchedule?.start} – {user.workSchedule?.end}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    departmentColor[user.department ?? ""] ??
                    "bg-muted text-muted-foreground"
                  }`}
                >
                  {departmentLabel[user.department ?? ""] ?? "—"}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}