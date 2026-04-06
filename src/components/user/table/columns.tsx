import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { MoreVertical } from "lucide-react"

import {
  type ColumnDef,
} from "@tanstack/react-table"
import type { UserType } from "@/types/user.types"
import { getInitials} from "@/utils/splitname"

 
const columns: ColumnDef<UserType>[] = [

  {
    accessorKey: "name",
    header: () => {
      return(
   <h3> Funcionário</h3>
      )
    },
           cell: ({ row }) => {
      const name = row.getValue("name")

return(
  <div className="flex items-center gap-2">  
  <span className="h-8 w-8 p-2 rounded-full bg-blue-300 flex items-center justify-center text-black">{getInitials(name as string)}</span>{name as string}</div>
)
  }
  },
  {
    accessorKey: "department",
    header: () => <h3>Cargo</h3>,
        cell: ({ row }) => {
      const role = row.getValue("department")


     return  role === "kt" ? <div>Cozinha</div> : role === "wt" ? <div>Atendimento</div> : <div>Bar</div>

   
  }
  },
    {
    accessorKey: "role",
    header: () =><h3>Departamento</h3>,
           cell: ({ row }) => {
      const role = row.getValue("role")

    if(role === "employee"){
      return <div>Funcionário</div>
    }
  }
  },
      
  
         {
    accessorKey: "workSchedule",
    header: () => {
      return (
    <h3>Turno</h3>
      )
    },
 cell: ({ row }) => {
  const workStart = row.original.workSchedule?.start;
   const workEnd = row.original.workSchedule?.end;

  return (
    <div>
      {workStart} - {workEnd}
    </div>
  );
}
},
        {
    accessorKey: "workSchedule",
    header: () => {
      return (
    <h3>Folgas</h3>
      )
    },
 cell: ({ row }) => {
  const workDays = row.original.workSchedule?.workDays;

  return (
    <div>
      {workDays?.join(", ") ?? "—"}
    </div>
  );
}
},
  {
    accessorKey: "salary",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("salary"))

      // Format the amount as a euro amount
      const formatted = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
  
    cell: () => {
  
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Vizualizar Perfil</DropdownMenuItem>
            <DropdownMenuItem>Ver Pagamentos</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
 

export { columns };