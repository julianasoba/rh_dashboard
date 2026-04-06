import CalendarUI from "@/components/calendar";
import Charthome from "@/components/charthome";
import { DataTableDemo } from "@/components/table";
import GroceryList from "./grocerieslist";

export default function HomeContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 py-6 ">
      <Charthome />
      <div className="flex flex-col items-end gap-4 p-2">
        <CalendarUI classname={"w-full"} />
        <GroceryList />
      </div>
      <DataTableDemo />
    </div>
  );
}
