import CardComp from "@/components/card";
import List from "@/components/list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { list } from "@/utils/list";

export default function GroceryList() {
  return (
    <div className="flex flex-auto w-full mt-2">
      <CardComp title="Compras Pendentes">
        <ScrollArea className="h-40">
          <ul>
            {list.map((item, index) => (
              <List item={item} key={index} />
            ))}
          </ul>
        </ScrollArea>
      </CardComp>
    </div>
  );
}
