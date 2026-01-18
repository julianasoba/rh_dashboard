import CardComp from "@/components/card";
import { ChartBarDefault } from "@/components/chartkpis";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Download, Rocket} from "lucide-react";

export default function Overview() {
  return (
     <div className="h-full">
              <Heading title="Olá, Martin Dala" text="Overview geral do Negócio">
             <div className="flex items-center gap-4 mt-2">
             <Button variant="outline" size="sm">
      <Download/> Adicionar Income
    </Button>
                <Button variant="outline" size="sm">
      <Rocket /> Atualizar dia
    </Button>
             
             </div>
              </Heading>
                <div className="grid grid-cols-2  py-6 gap-6">
                             <div className="col-span-1">
                        <ChartBarDefault/>
                        </div>
                <div className="col-span-1">
                  <div className="flex flex-col gap-3">
               <CardComp title="Turno de Hoje">
                         <div>
                           <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
                           <p className="text-sm"><strong>Horário: </strong>09:00 - 18:00</p>
                           <p className="text-sm"><strong>Equipe A: </strong> Juliana, Sonia, Carlos</p>
                         </div>
                       </CardComp>
                             <CardComp title="Turno de Hoje">
                         <div>
                           <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
                           <p className="text-sm"><strong>Horário: </strong>09:00 - 18:00</p>
                           <p className="text-sm"><strong>Equipe A: </strong> Juliana, Sonia, Carlos</p>
                         </div>
                       </CardComp>
                                                  <CardComp title="Turno de Hoje">
                         <div>
                           <p className="text-sm"><strong>Data:</strong> 12 de Junho de 2025</p>
                           <p className="text-sm"><strong>Horário: </strong>09:00 - 18:00</p>
                           <p className="text-sm"><strong>Equipe A: </strong> Juliana, Sonia, Carlos</p>
                         </div>
                       </CardComp>
                  </div>
        
                        </div>
                        </div>
              </div>
  )
}
