import {
    Info,
  SearchIcon,
  BellIcon,
  Sun,
  Moon
} from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
   const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex items-center justify-between p-4 border-b">
        <div className="w-1/2">
         <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      </div>
        <nav className="flex items-center gap-2.5">
          <ul className="flex items-center gap-2">
                   <li className="flex items-center">
                    
                <button onClick={toggleTheme} className="cursor-pointer">{theme === "light" ? <Moon /> : <Sun/>}</button>
            </li>
            <li>
                <a href=""><Info /></a>
            </li>
                <li>
                <a href=""><BellIcon /></a>
            </li>
            </ul>
                  <div className="flex items-center gap-2">
           <button  className="w-6 h-6 rounded-full border dark:border-white border-black flex items-center justify-center p-3"><p className="text-xs">JS</p></button>

<span className="flex-col flex">
    <strong className="text-sm">Martin Dala</strong>
    <p className="text-xs">Admin / RH</p>
</span>
        </div>
        </nav>
  
    </header>
  )
}
