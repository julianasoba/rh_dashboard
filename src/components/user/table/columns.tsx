import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { MoreHorizontal } from "lucide-react"

import {
  type ColumnDef,
} from "@tanstack/react-table"
import type { UserType } from "@/types/usertype"

 
const columns: ColumnDef<UserType>[] = [

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Funcionário
        </Button>
      )
    },
  },
    {
    accessorKey: "position",
    header: () => {
      return (
    <h3>Turno</h3>
      )
    },
  },
      {
    accessorKey: "position",
    header: () => {
      return (
    <h3>Turno</h3>
      )
    },
  },
  
   /* {
    accessorKey: "workSchedule",
    header: () => {
      return (
    <h3>Turno</h3>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("workSchedule")}</div>,
  },
     /* {
    accessorKey: "work",
    header: () => {
      return (
    <h3>Próxima folga</h3>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },/*/
        {
    accessorKey: "date",
    header: () => {
      return (
    <h3>Faltas (Mensal)</h3>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
  
    cell: ({ row }) => {
       // const payment = row.original
      
console.log("ROW", row);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
             // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
 

export { columns };