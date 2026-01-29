import { useState } from "react";

export interface WorkDay {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  selected: boolean;
}
export const useWorkDays = (initialDays: WorkDay[]) => {
  const [workDays, setWorkDays] = useState<WorkDay[]>(initialDays);
  const [randomized, setRandomized] = useState(false);

  const toggleDay = (day: WorkDay["day"]) => {
    setWorkDays(prev =>
      prev.map(d => (d.day === day ? { ...d, selected: !d.selected } : d))
    );
  };

  const generateRandom = () => {
    const weekdays: WorkDay["day"][] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const randomDays = weekdays.sort(() => 0.5 - Math.random()).slice(0, 2);

    setWorkDays(prev =>
      prev.map(d => ({ ...d, selected: randomDays.includes(d.day) }))
    );
    setRandomized(true);
  };

  return { workDays, toggleDay, generateRandom, randomized, setRandomized };
};
