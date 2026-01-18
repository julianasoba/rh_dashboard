import Heading from '@/components/heading'
import { DataTableDemo } from '@/components/table'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Send } from 'lucide-react'


export default function Reports() {
  return (
       <div className="h-full">
              <Heading title="Olá, Martin Dala" text="Invoices e Relatórios">
             <div className="flex items-center gap-4 mt-2">
     
       <Button variant="outline" size="sm">
    <Send/>  Enviar Recibo
    </Button>
       <Button variant="outline" size="sm">
      Exportar Doc
    </Button>
      <Button variant="outline" size="sm">
      Importar
    </Button>
       <Button variant="outline" size="sm">
      Gerar Statement
    </Button>

             </div>
              </Heading>
                      <Card className="p-4 rounded-xs  mt-4">
    <DataTableDemo/>
    </Card>
              </div>
  )
}


