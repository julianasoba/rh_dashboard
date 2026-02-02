import CalendarUI from "@/components/calendar";
import CardComp from "@/components/card";
import Charthome from "@/components/charthome";
import Heading from "@/components/heading";
import HomeSummaryCards from "@/components/home/sumarycards";
import List from "@/components/list";
import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { list } from "@/utils/list";
import { Download } from "lucide-react";



const data ={
   shift: {
      date: "2 de Fevereiro de 2025",
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






export default function Home() {
  return (
    <div className="h-full">
      <Heading title="Olá, Martin Dala" text="Seja bem-vinda ao Dashboard">
        <Button variant="outline" size="sm">
      <Download/> Download
    </Button>
      </Heading>
<HomeSummaryCards shift={data.shift} teamSummary={data.teamSummary} pendingPurchase={data.pendingPurchase} />
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
