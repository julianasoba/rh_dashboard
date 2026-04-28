import { Timestamp } from "firebase/firestore";

export type Department = "kitchen" | "waitress" | "bar" | "management";
export type WorkDay = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
export type UserRole = "admin" | "manager" | "employee";

export interface UserType {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  active?: boolean;
  createdAt: Timestamp;
  salary?: number;
  position?: string;
  department?: Department;
  workSchedule?: {
    start: string;
    end: string;
    workDays: WorkDay[];
  };
}