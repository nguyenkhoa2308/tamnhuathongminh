"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  minWidth?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Chọn...",
  className = "",
  minWidth = "180px",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ minWidth }}
        className={`
          flex items-center justify-between gap-3 px-4 py-2.5
          bg-white border-2 rounded-lg font-medium text-gray-700
          transition-all duration-150 cursor-pointer whitespace-nowrap
          ${
            isOpen
              ? "border-[#996515] shadow-[0_0_0_3px_rgba(153,101,21,0.15)]"
              : "border-gray-200 hover:border-[#996515]"
          }
        `}
      >
        <span className={selectedOption ? "text-gray-700" : "text-gray-400"}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#996515] transition-transform duration-150 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-dropdown max-h-[140px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`
                flex items-center justify-between w-full px-4 py-2.5 text-left
                transition-colors duration-100 cursor-pointer whitespace-nowrap
                ${
                  option.value === value
                    ? "bg-gradient-to-r from-[#996515]/10 to-[#D4AF37]/10 text-[#996515] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <span>{option.label}</span>
              {option.value === value && (
                <Check className="w-4 h-4 text-[#996515]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
