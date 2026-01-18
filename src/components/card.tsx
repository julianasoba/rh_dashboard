import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"

interface CardProps  {
    title?: string,
    children?: React.ReactNode,
    classname?: string
}

export default function CardComp({title,children,classname}:CardProps) {
  return (
    <Card className={`rounded-md ${classname}`}>
              <CardHeader>
        <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
            {children}
       </CardContent>

    </Card>
  )
}
