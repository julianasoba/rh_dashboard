import CardComp from "@/components/card";
import Heading from "@/components/heading";
import { DataTableDemo } from "@/components/table";
import { Card } from "@/components/ui/card";
export default function Employees() {
  return (
    <div className="h-full">
      <Heading title="Olá, Martin Dala" text="Funcionários Cadastrados">
     <div className="flex items-center gap-4 mt-2">

      <CardComp title="Total de Funcionários">
          <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
      </CardComp>
       <CardComp title="Cozinha">
          <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
      </CardComp>
        <CardComp title="Atendimento">
          <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
      </CardComp>
     </div>
      </Heading>
      <div className=" py-6 bg-green">
             <Card className="p-4 pb-0 rounded-xs w-full">
    <DataTableDemo/>
    </Card>
      </div>

      </div>
  )
}
