import CardComp from "@/components/card";
import { ChartAreaDefault } from "@/components/chartalerts";
import Heading from "@/components/heading";
import List from "@/components/list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { list } from "@/utils/list";

export default function Absences() {
  return (
     <div className="h-full">
          <Heading title="Olá, Martin Dala" text="Faltas e Atestados (Justificados)">
         <div className="flex items-center gap-4 mt-2">
    
          <CardComp title="Total de Funcionários">
              <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
          </CardComp>
         </div>
          </Heading>
          <div className="grid grid-cols-5  py-6 gap-6">
               <div className="col-span-3">
          <ChartAreaDefault/>
                </div>
                 <CardComp title="Compras Pendentes" classname="bg-red col-span-2">
        <ScrollArea >
    <ul >
  {list.map((item, index) => (
    <List item={item} key={index} />
  ))}
    </ul>
    </ScrollArea>
   </CardComp>
                </div>
          </div>
  )
}
