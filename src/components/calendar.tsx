import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

interface CalendarUIProps {
  classname?: string;
  events?: Record<string, "off" | "vacation" | "closed" | "event">;
}

export default function CalendarUI({ classname, events }: CalendarUIProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(date) => {
        setDate(date);
        console.log("Selected date:", date);
      }}
      className={`rounded-lg border ${classname}`}
      modifiersClassNames={{
        selected: "bg-black text-white",
        off: "bg-amber-100 text-amber-700",
        vacation: "bg-blue-100 text-blue-700",
        closed: "bg-red-100 text-red-700",
        event: "bg-green-100 text-green-700",
      }}
      modifiers={{
        off: (day) => events?.[day.toISOString().split("T")[0]] === "off",
        vacation: (day) => events?.[day.toISOString().split("T")[0]] === "vacation",
        closed: (day) => events?.[day.toISOString().split("T")[0]] === "closed",
        event: (day) => events?.[day.toISOString().split("T")[0]] === "event",
      }}
    />
  );
}

