import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


export default function HeaderHome() {
    return(
        <Heading title="Olá, Martin Dala" text="Seja bem-vinda ao Dashboard">
        <Button variant="outline" size="sm">
      <Download/> Download
    </Button>
      </Heading>
      )
}
