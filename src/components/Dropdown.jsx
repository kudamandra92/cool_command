import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ label, items = [], onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-3 bg-blueish text-yellowish border rounded-md hover:bg-blueish/80 transition"
      >
        {selected || label}
        <ChevronDown
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md z-[9999]">
          {items.length > 0 ? (
            items.map((item, i) => (
              <div
                key={i}
                onClick={() => handleSelect(item)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selected === item ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="p-2 text-sm text-gray-500">No items provided.</div>
          )}
        </div>
      )}
    </div>
  );
}
