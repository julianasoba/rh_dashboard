import CalendarUI from "@/components/calendar";
import {EmployeeTable } from "@/components/table";

import { useUsers } from "@/hooks/useUsers";
import Charthome from "./charthome";

export default function HomeContent() {
   const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  const filteredUsers = users?.filter(user => user.role === "employee") || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 py-6 ">
      <Charthome />
      <div className="flex flex-col items-end gap-4 p-2">
        <CalendarUI classname={"w-full"} />
      </div>
      <EmployeeTable data={filteredUsers} />
    </div>
  );
}
