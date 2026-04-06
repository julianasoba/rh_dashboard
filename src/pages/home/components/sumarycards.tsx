import CardComp from "@/components/card";
import { useUsers } from "@/hooks/useUsers";
import { Skeleton } from "../../../components/ui/skeleton";





const data ={
   shift: {
      date: new Intl.DateTimeFormat("pt-PT", { dateStyle: "long" }).format(new Date()),
      time: "09:10 - 18:00",
      team: ["Joana", "Pedro"],
    },
    teamSummary: {
      total: 7,
  kitchen: 5,
  service: 8,
    },
    pendingPurchase: {
      status: "pending",
      department: "kitchen",
    },
}
export default function HomeSummaryCards() {

      const { data: users, isLoading, isError, error } = useUsers();
  if (isError) return <p>Erro ao carregar produtos: {error.message}</p>;


  console.log(users)
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      <CardComp title="Turno de Hoje">
        <p className="text-sm">
          <strong>Data:</strong>{isLoading && <Skeleton className="h-4 w-37.5" />} {data.shift.date}
        </p>
        <p className="text-sm">
          <strong>Horário:</strong> {data.shift.time}
        </p>
        <p className="text-sm">
          <strong>Equipe:</strong> {data.shift.team.join(", ")}
        </p>
      </CardComp>

      <CardComp title="Resumo da Equipa">
        <p className="text-sm">
          <strong>Total:</strong> {data.teamSummary.total} funcionários
        </p>
        <p className="text-sm">
          <strong>Cozinha:</strong> {data.teamSummary.kitchen}
        </p>
        <p className="text-sm">
          <strong>Atendimento:</strong> {data.teamSummary.service}
        </p>
      </CardComp>

      <CardComp title="Compras Pendentes">
        <p className="text-sm">
          <strong>Status:</strong> {data.pendingPurchase.status}
        </p>
        <p className="text-sm">
          <strong>Pedido da:</strong> {data.pendingPurchase.department}
        </p>
      </CardComp>

      <CardComp title="Resumo de Vendas">
        <p className="text-sm text-muted-foreground">
          Em breve
        </p>
      </CardComp>
    </div>
  );
}
