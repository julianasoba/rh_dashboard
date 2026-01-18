import CalendarUI from "@/components/calendar";
import CardComp from "@/components/card";
import Charthome from "@/components/charthome";
import Heading from "@/components/heading";
import List from "@/components/list";
import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { list } from "@/utils/list";
import { Download } from "lucide-react";




export default function Home() {
  return (
    <div className="h-full">
      <Heading title="Olá, Martin Dala" text="Seja bem-vinda ao Dashboard">
        <Button variant="outline" size="sm">
      <Download/> Download
    </Button>
      </Heading>
<div className="grid grid-cols-4 gap-4 mt-6">
<CardComp title="Turno de Hoje">
  <div>
    <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
    <p className="text-sm"><strong>Horário: </strong>09:00 - 18:00</p>
    <p className="text-sm"><strong>Equipe A: </strong> Juliana, Sonia, Carlos</p>
  </div>
</CardComp>
<CardComp title="Resumo da Equipa">
  <div>
        <p className="text-sm"><strong>Total:</strong> 7 funcionários</p>
    <p className="text-sm"><strong>Cozinha: </strong> 3</p>
    <p className="text-sm"><strong>Atendimento: </strong> 7</p>
  </div>
</CardComp>
<CardComp title="Compras Pendentes">
  <div>
        <p className="text-sm"><strong>Status:</strong> Solicitação de Compra</p>
    <p className="text-sm"><strong>Pedido da: </strong> Cozinha</p>
  </div>
</CardComp>
<CardComp title="Resumo de Vendas"></CardComp>
</div>

    <div className="grid grid-cols-4 py-6 ">
      <div className="col-span-3 p-2">
<Charthome/>

      </div>
      <div className="flex flex-col items-end p-2">
        <CalendarUI classname={"w-full"}/>
        <div className="bg-red flex- flex-auto  w-full mt-2">
   <CardComp title="Compras Pendentes">
        <ScrollArea className="h-40">
    <ul >
  {list.map((item, index) => (
    <List item={item} key={index} />
  ))}
    </ul>
    </ScrollArea>
   </CardComp>
        </div>
     
      </div>
        <Card className="p-4 rounded-xs col-span-4 mt-4">
    <DataTableDemo/>
    </Card>
    </div>
  
    </div>
  )
}
