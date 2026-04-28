import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const chartData = [
  { month: "Nov", faturacao: 8400 },
  { month: "Dez", faturacao: 11200 },
  { month: "Jan", faturacao: 7800 },
  { month: "Fev", faturacao: 9100 },
  { month: "Mar", faturacao: 10300 },
  { month: "Abr", faturacao: 9800 },
];

const chartConfig = {
  faturacao: {
    label: "Faturação (€)",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const last = chartData[chartData.length - 1].faturacao;
const prev = chartData[chartData.length - 2].faturacao;
const diff = (((last - prev) / prev) * 100).toFixed(1);
const isUp = last >= prev;

export default function Charthome() {
  return (
    <Card className="col-span-3 rounded-md">
      <CardHeader>
        <CardTitle>Faturação Mensal</CardTitle>
        <CardDescription>
          Últimos 6 meses · dados ilustrativos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-55 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    new Intl.NumberFormat("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    }).format(value as number)
                  }
                />
              }
            />
            <Bar dataKey="faturacao" fill="var(--color-faturacao)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="flex items-center gap-1.5 mt-3 text-sm">
          {isUp ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          <span className={isUp ? "text-green-500" : "text-red-500"}>
            {isUp ? "+" : ""}{diff}%
          </span>
          <span className="text-muted-foreground">vs mês anterior</span>
        </div>
      </CardContent>
    </Card>
  );
}

