import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import type { CardProps } from "@/types/cardtype"

export default function CardComp({title,children}:CardProps) {
  return (
    <Card className="rounded-md">
              <CardHeader>
        <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
            {children}
       </CardContent>

    </Card>
  )
}
