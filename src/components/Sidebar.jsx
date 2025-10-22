// import { useState } from "react";
import {
  Menu,
  ChevronLeft,
  LayoutDashboard,
  User,
  Leaf,
  Settings,
  CopyPlus,
  DoorOpen,
} from "lucide-react";

export default function Sidebar() {
  // const [isOpen, setIsOpen] = useState(true);
  // const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <LayoutDashboard size={30} />, label: "Dashboard" },
    { icon: <DoorOpen size={30} />, label: "Room" },
    { icon: <Leaf size={30} />, label: "Analysis" },
    { icon: <CopyPlus size={30} />, label: "Add Devices" },
    { icon: <Settings size={30} />, label: "Settings" },
  ];

  return (
    <aside className="flex flex-col top-0 left-0 h-full min-h-screen  bg-limeish shadow-md z-40 transition-all duration-300 ease-in-out w-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4 py-8 border-b border-gray-200">
        <User size={30} />
      </div>
      {/* <div
        className={`flex items-center justify-between p-4 border-b border-gray-200 ${
          isOpen ? "" : "flex-col"
        }`}
      >
        {isOpen && (
          <h1 className="text-lg font-bold text-gray-800 whitespace-nowrap">
            My Dashboard
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isOpen ? <ChevronLeft size={22} /> : <Menu size={22} />}
        </button>
      </div> */}

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-5">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex flex-col items-center justify-center py-4 text-blueish hover:bg-blueish/70 hover:text-yellowish transition-all duration-200"
          >
            <div className="flex flex-col items-center">
              <div className="transition-transform duration-200">
                {item.icon}
              </div>

              <span className="text-sm mt-1 font-medium">{item.label}</span>
            </div>
          </a>
        ))}
      </nav>
    </aside>
  );
}
