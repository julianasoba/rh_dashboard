import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field, FieldLabel,
} from "@/components/ui/field"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { useWorkDays, type WorkDay } from "@/hooks/useWorkDays"
import { createUserInFirestore } from "@/services/users/createUser"

type ModalProps = {
  open: boolean
  onClose: () => void
}


const daysOfWeek: WorkDay[] = [
    { day: "Sun", selected: false },
  { day: "Mon", selected: false },
  { day: "Tue", selected: false },
  { day: "Wed", selected: false },
  { day: "Thu", selected: false },
  { day: "Fri", selected: false },
  { day: "Sat", selected: false },
  
];

export function CreateUserModal({ open, onClose }: ModalProps) {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(0);
  
  const [contract, setContract] = useState("tc");
  const [department, setDepartment] = useState("wt");
  const [startTime, setStartTime] = useState("09:30");
  const [endTime, setEndTime] = useState("18:30");
    const { workDays, toggleDay, generateRandom, randomized } = useWorkDays(daysOfWeek);

const handleCreateUser = async () => {
     console.log("Estou aqui:");
     try{
const userId = await createUserInFirestore({
  name,
  email,
  department,
  salary,
  role: "employee",
  active: true,
  workSchedule: {
    start: startTime,
    end: endTime,
    workDays: workDays.filter(d => d.selected).map(d => d.day)
  }
});
   console.log("✅ Usuário criado com ID:", userId);
    onClose();
     } catch (error) {
    console.error("❌ Falha ao criar usuário:", error);
  }
};



  return (
    <Dialog open={open} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Criar Colaborador</DialogTitle>
          <DialogDescription>
            Criar um novo colaborador.
          </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[70vh] overflow-y-auto px-4">
            <div className="grid grid-cols-2 gap-6">
                <Field>
                    <FieldLabel htmlFor="form-name">Nome</FieldLabel>
                    <Input
                      id="form-name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-email">Email</FieldLabel>
                    <Input
                      id="form-email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>
                              <Field>
                    <FieldLabel htmlFor="form-salary">Salário</FieldLabel>
                    <Input
                      id="form-salary"
                      placeholder="Enter Salary"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                    />
                                       <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox"/>
        <FieldLabel htmlFor="terms-checkbox">Salário Base</FieldLabel>
      </Field>
                </Field>
                                   <Field>
                    <FieldLabel htmlFor="form-contract-type">Tipo de Contrato</FieldLabel>
                   <Select value={contract} onValueChange={setContract}>
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tc">Termo Certo</SelectItem>
                <SelectItem value="ti">Termo Incerto</SelectItem>
              </SelectContent>
            </Select>
                </Field>
        <Field>
            <FieldLabel htmlFor="form-country">Turno</FieldLabel>
            <div className="flex gap-3">
        <div className="w-32">
        <Input
          type="time"
          defaultValue={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
              <div className="w-32">
        <Input
          type="time"
          defaultValue={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
      </div>
          </Field>
       <Field>
            <FieldLabel htmlFor="form-country">Área</FieldLabel>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wt">Atendimento</SelectItem>
                <SelectItem value="kt">Cozinha</SelectItem>
                <SelectItem value="br">Bar</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Curriculum</FieldLabel>
           <Input type="file" placeholder="Curriculumn" />
          </Field>
                    <Field>
            <FieldLabel htmlFor="form-country">Folgas</FieldLabel>
        <div className="flex gap-1.5">
            {workDays.map(({ day, selected }) => (
              <Button
                key={day}
                className={`p-2.5 ${selected ? "bg-primary" : "bg-secondary"}`}
                onClick={() => toggleDay(day)}
                disabled={randomized}
              >
                {day}
              </Button>
            ))}
        </div>
          </Field>
            </div>
        </div>
                <DialogFooter>
                    <div className="flex justify-between w-full">
                         <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" checked={randomized} onCheckedChange={generateRandom}/>
        <FieldLabel htmlFor="terms-checkbox">Folga Aleatória</FieldLabel>
      </Field>
            <Button variant="outline" onClick={handleCreateUser}>Criar Colaborador</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
