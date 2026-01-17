import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen">
      <Heading title="Olá, Martin Dala" text="Seja bem-vinda ao Dashboard">
        <>
        <Button variant="outline" size="sm">
      <Download/> Download
    </Button>

        </>
      </Heading>
    </div>
  )
}
