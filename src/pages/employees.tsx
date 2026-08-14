import CardComp from "@/components/card";
import Heading from "@/components/heading";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CreateUserModal } from "@/components/user/profile/modal";
import { DataUserTable } from "@/components/user/table/table";
import { useUsers } from "@/hooks/useUsers";
import { useState } from "react";


export default function Employees() {
  const [open, setOpen] = useState(false);
  const {data: users, isLoading,}=useUsers();

  const handleOpenModalToCreateUser =()=>{
    console.log("FOI CHAMADO NO PAI");
    setOpen(true)
  }

  const usersFiltered = users?.filter(user => user.role === "employee") ?? [];
  const isDepartment = (department: unknown, expected: string) =>
    String(department ?? "").toLowerCase() === expected;

  return (
    <>
    <div className="flex flex-col">
      <Heading title="Olá, Martin Dala" text="Funcionários Cadastrados">
     <div className="grid grid-cols-3 gap-4 mt-2">
            <CardComp title="Funcionários">
          <p className="text-sm"><strong>Funcionários:</strong> {usersFiltered?.length ?? 0} no total</p>
      </CardComp>
       <CardComp title="Cozinha">
          <p className="text-sm"><strong>Departamento:</strong> {usersFiltered?.filter(user => isDepartment(user.department, "kt")).length ?? 0}</p>
      </CardComp>
        <CardComp title="Atendimento">
          <p className="text-sm"><strong>Departamento:</strong> {usersFiltered?.filter(user => isDepartment(user.department, "wt")).length ?? 0}</p>
      </CardComp>
     </div>
      </Heading>
      <div className="pt-6 bg-green">
             <Card className="p-4 pb-0 rounded-xs w-full">
              {isLoading ? <Skeleton className="h-50 w-full" /> :
              <DataUserTable onCreateUser={handleOpenModalToCreateUser} users={usersFiltered ?? []}/>}
    </Card>
      </div>

      </div>

     {open && <CreateUserModal open={open} onClose={() => setOpen(false)}/>}
      </>
  )
}
