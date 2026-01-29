import { Timestamp } from "firebase/firestore"
export interface UserType {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "employee"

  active?: boolean
  createdAt: Timestamp
  salary?:number
  contract?: "tc" | "ti"

  position?: string
  department?: string

  workSchedule?: {
    start: string 
    end: string 
    workDays: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[]
  }
}