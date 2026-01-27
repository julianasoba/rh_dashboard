import type { UserType } from "@/types/usertype";
import { Timestamp } from "firebase/firestore"; // ou onde você estiver usando Timestamp

export const users: UserType[] = [
  {
    id: "1",
    name: "Alice Santos",
    email: "alice.santos@email.com",
    role: "admin",
    active: true,
    createdAt: Timestamp.fromDate(new Date("2023-01-15")),
    position: "CTO",
    department: "Technology",
    workSchedule: {
      start: "09:00",
      end: "18:00",
      workDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  },
  {
    id: "2",
    name: "Bruno Costa",
    email: "bruno.costa@email.com",
    role: "manager",
    active: true,
    createdAt: Timestamp.fromDate(new Date("2023-03-10")),
    position: "Project Manager",
    department: "Operations",
    workSchedule: {
      start: "08:00",
      end: "17:00",
      workDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  },

  {
    id: "4",
    name: "Daniel Pereira",
    email: "daniel.pereira@email.com",
    role: "employee",
    active: false,
    createdAt: Timestamp.fromDate(new Date("2022-11-05")),
    position: "Frontend Developer",
    department: "Technology",
    workSchedule: {
      start: "09:00",
      end: "18:00",
      workDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  },

  {
    id: "6",
    name: "Felipe Martins",
    email: "felipe.martins@email.com",
    role: "employee",
    active: true,
    createdAt: Timestamp.fromDate(new Date("2023-06-01")),
    position: "QA Analyst",
    department: "Technology",
    workSchedule: {
      start: "09:00",
      end: "17:00",
      workDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  },



  {
    id: "10",
    name: "João Almeida",
    email: "joao.almeida@email.com",
    role: "manager",
    active: true,
    createdAt: Timestamp.fromDate(new Date("2023-09-05")),
    position: "Operations Manager",
    department: "Operations",
    workSchedule: {
      start: "08:00",
      end: "16:00",
      workDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  },
];
