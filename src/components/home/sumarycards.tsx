import CardComp from "@/components/card";
import { useUsers } from "@/hooks/useUsers";
import { Skeleton } from "../ui/skeleton";

type Shift = {
  date: string;
  time: string;
  team: string[];
};

type TeamSummary = {
  total: number;
  kitchen: number;
  service: number;
};

type PendingPurchase = {
  status: string;
  department: string;
};

type Props = {
  shift: Shift;
  teamSummary: TeamSummary;
  pendingPurchase: PendingPurchase;
};

export default function HomeSummaryCards({
  shift,
  teamSummary,
  pendingPurchase,
}: Props) {

      const { data: users, isLoading, isError, error } = useUsers();
  if (isError) return <p>Erro ao carregar produtos: {error.message}</p>;


  console.log(users)
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      <CardComp title="Turno de Hoje">
        <p className="text-sm">
          <strong>Data:</strong>{isLoading && <Skeleton className="h-4 w-[150px]" />} {shift.date}
        </p>
        <p className="text-sm">
          <strong>Horário:</strong> {shift.time}
        </p>
        <p className="text-sm">
          <strong>Equipe:</strong> {shift.team.join(", ")}
        </p>
      </CardComp>

      <CardComp title="Resumo da Equipa">
        <p className="text-sm">
          <strong>Total:</strong> {teamSummary.total} funcionários
        </p>
        <p className="text-sm">
          <strong>Cozinha:</strong> {teamSummary.kitchen}
        </p>
        <p className="text-sm">
          <strong>Atendimento:</strong> {teamSummary.service}
        </p>
      </CardComp>

      <CardComp title="Compras Pendentes">
        <p className="text-sm">
          <strong>Status:</strong> {pendingPurchase.status}
        </p>
        <p className="text-sm">
          <strong>Pedido da:</strong> {pendingPurchase.department}
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
