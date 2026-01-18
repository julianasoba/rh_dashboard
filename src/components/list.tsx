interface ListProps {
    item: string;
}



export default function List({item}:ListProps) {
  return (
     <li className="text-sm mb-1 gap-3 px-2 py-1">
        <input type="checkbox" className="h-3 w-3 mr-1" />{item}
        </li>
  )
}
