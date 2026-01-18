import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
    ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const chartData = [
  { month: "January", faturamento: 150, faltas: 80 },
  { month: "February", faturamento: 305, faltas: 200 },
  { month: "March", faturamento: 237, faltas: 120 },
  { month: "April", faturamento: 73, faltas: 190 },
  { month: "May", faturamento: 209, faltas: 130 },
  { month: "June", faturamento: 214, faltas: 140 },
]

const chartConfig = {
  faturamento: {
    label: "Faturamento(€)",
    color: "#2563eb",
  },
  faltas: {
label: "Total de Faltas",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function Charthome() {
  return (
        <Card className="rounded-sm">
      <CardHeader>
        <CardTitle>Gráfico de Faturamento Mensal e Faltas de Funcionários</CardTitle>
        <CardDescription>
          Demostração das vendas mensais em euros e o total de faltas dos funcionários
        </CardDescription>
      </CardHeader>
      <CardContent>

    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="faturamento" fill="var(--color-faturamento)" radius={4} />
        <Bar dataKey="faltas" fill="var(--color-faltas)" radius={4} />
      </BarChart>
    </ChartContainer>
      </CardContent>
     </Card>
  )
}


