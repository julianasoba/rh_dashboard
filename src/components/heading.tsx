import type { HeadingProps } from "@/types/headingtype";


export default function Heading({title,text,children}:HeadingProps) {
  return (
    <div className=" flex justify-between items-center">
        <div className="flex flex-col">
            <h3 className="font-bold text-2xl">{title}</h3>
            <p className="text-xs text-gray-500">{text}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}
