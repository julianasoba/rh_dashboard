import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useWorkDays, type WorkDay } from "@/hooks/useWorkDays";
import { createUserInFirestore } from "@/services/users/users.service";
import type { Department } from "@/types/user.types";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

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
  const [department, setDepartment] = useState<Department>("waitress");
  const [startTime, setStartTime] = useState("09:30");
  const [endTime, setEndTime] = useState("18:30");
  const { workDays, toggleDay, generateRandom, randomized } =
    useWorkDays(daysOfWeek);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formEmailError, setFormEmailError] = useState("");

  const handleCreateUser = async () => {
    setFormError("");
    setFormEmailError("");

    // Validação básica
    if (!name.trim()) return setFormError("Nome é obrigatório.");
    if (!email.trim() || !email.includes("@"))
      return setFormEmailError("Email inválido.");
    setIsSubmitting(true);
    try {
      await createUserInFirestore({
        name: name.trim(),
        email: email.trim(),
        department,
        salary,
        role: "employee",
        active: true,
        workSchedule: {
          start: startTime,
          end: endTime,
          workDays: workDays.filter((d) => d.selected).map((d) => d.day),
        },
      });
      onClose();
    } catch (error) {
      setFormError("Erro ao criar colaborador. Tenta novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Criar Colaborador</DialogTitle>
          <DialogDescription>Criar um novo colaborador.</DialogDescription>
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
              {!name.trim() && (
                <p className="text-[0.50rem] text-destructive">{formError}</p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
              <Input
                id="form-email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!email.trim() && (
                <p className="text-[0.50rem] text-destructive">{formEmailError}</p>
              )}
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
                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                <FieldLabel htmlFor="terms-checkbox">Salário Base</FieldLabel>
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="form-turno">Turno</FieldLabel>
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
              <FieldLabel htmlFor="form-area">Área</FieldLabel>
              <Select
                value={department}
                onValueChange={
                  setDepartment as unknown as (value: string) => void
                }
              >
                <SelectTrigger id="form-area">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="waitress">Atendimento</SelectItem>
                  <SelectItem value="kitchen">Cozinha</SelectItem>
                  <SelectItem value="bar">Bar</SelectItem>
                </SelectContent>
              </Select>
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
              <Checkbox
                id="terms-checkbox"
                name="terms-checkbox"
                checked={randomized}
                onCheckedChange={generateRandom}
              />
              <FieldLabel htmlFor="terms-checkbox">Folga Aleatória</FieldLabel>
            </Field>
            <Button
              variant="outline"
              onClick={handleCreateUser}
              disabled={isSubmitting}
            >
              {isSubmitting ? "A criar..." : "Criar Colaborador"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
