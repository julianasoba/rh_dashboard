import CardComp from "@/components/card";
import Heading from "@/components/heading";
import { Card } from "@/components/ui/card";
import { CreateUserModal } from "@/components/user/profile/modal";
import { DataUserTable } from "@/components/user/table/table";
import { useState } from "react";


export default function Employees() {
  const [open, setOpen] = useState(false);

  const handleOpenModalToCreateUser =()=>{
    console.log("FOI CHAMADO NO PAI");
    setOpen(true)
  }
  return (
    <>
    <div className="flex flex-col">
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
      <div className="pt-6 bg-green">
             <Card className="p-4 pb-0 rounded-xs w-full">
    <DataUserTable onCreateUser={handleOpenModalToCreateUser}/>
    </Card>
      </div>

      </div>

     {open && <CreateUserModal open={open} onClose={() => setOpen(false)}/>}
      </>
  )
}
