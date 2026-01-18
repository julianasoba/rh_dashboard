import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

interface CalendarUIProps {
  classname?: string;
}


export default function CalendarUI({classname}:CalendarUIProps){

  const [date, setDate] = useState<Date | undefined>(
    new Date(2026, 1, 17)
  )

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={`rounded-lg border [--cell-size:--spacing(8)] md:[--cell-size:--spacing(8)] ${classname}`}
      buttonVariant="ghost"
    />
  )
}

