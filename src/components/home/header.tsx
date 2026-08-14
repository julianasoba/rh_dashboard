import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Download } from "lucide-react";


export default function HeaderHome() {
   const { user } = useAuth();
   console.log(user)
    return(
        <Heading title={`Olá, ${user?.name}`} text="Seja bem-vinda ao Dashboard">
        <Button variant="outline" size="sm">
      <Download/> Download
    </Button>
      </Heading>
      )
}
