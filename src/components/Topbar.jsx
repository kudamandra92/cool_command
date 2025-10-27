import {Menu, LayoutDashboard, DoorOpen, Leaf, CopyPlus, Settings, X} from "lucide-react";
import {useState} from "react";

export default function Topbar(){
  const [isOpen, setIsOpen] = useState(false);
  const toggleTopbar = () => setIsOpen (!isOpen)
    
  const menuItems = [
    { icon: <LayoutDashboard size={30} />, label: "Dashboard" },
    { icon: <DoorOpen size={30} />, label: "Room" },
    { icon: <Leaf size={30} />, label: "Analysis" },
    { icon: <CopyPlus size={30} />, label: "Add Devices" },
    { icon: <Settings size={30} />, label: "Settings" },
  ];
  return (
    <div className="flex flex-col w-full items-center bg-limeish p-2 gap-2 transition-all duration-300 ease-in-out" >
      {isOpen && menuItems.map((item,i)=> (
        <a key={i} href="#" className="flex flex-col items-center hover:bg-blueish w-full hover:text-yellowish transition-all duration-300 ease-in-out">
          {item.icon}{item.label}
        </a>
      ))} 
      <div onClick={toggleTopbar}>{isOpen ? <X /> : <Menu /> }</div>
      <div>
      </div>
    </div>
    )
}