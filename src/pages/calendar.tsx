import CalendarUI from "@/components/calendar";
import Heading from "@/components/heading";
import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card} from "@/components/ui/card";
import {  Plus, RefreshCcw, Wrench } from "lucide-react";
export default function Calendar() {
  return (
    <div className="w-full h-full">
         <Heading title="Olá, Martin Dala" text="Folgas e Turnos Mensais">
        <Button variant="outline" size="sm">
      <Plus/> Adicionar Turno
    </Button>
      </Heading>
          <div className="grid grid-cols-4 py-6 gap-6 ">
          <Card className="p-4 rounded-xs col-span-3">
    <DataTableDemo/>
    </Card>
    <div className="flex flex-col items-end">
    <CalendarUI classname="w-full"/>
    <div className="bg-red w-full mt-4 flex flex-col gap-4">
  <Button variant="outline" size="sm">
      <RefreshCcw /> Gerar Turno da Semana
    </Button>
     <Button variant="outline" size="sm">
      <Wrench /> Ajustar Folgas
    </Button>
    </div>
      
    </div>
  
    
    </div>
    </div>

  )
}
