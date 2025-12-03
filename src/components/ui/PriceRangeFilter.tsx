"use client";

import { useState } from "react";

const formatNumberStatic = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

export default function PriceRangeFilter({
  minPrice,
  maxPrice,
  onPriceChange,
}: PriceRangeFilterProps) {
  const [localMin, setLocalMin] = useState(() =>
    minPrice > 0 ? formatNumberStatic(minPrice) : ""
  );
  const [localMax, setLocalMax] = useState(() =>
    maxPrice > 0 ? formatNumberStatic(maxPrice) : ""
  );

  const formatNumber = (value: string) => {
    const num = value.replace(/\D/g, "");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const parseNumber = (value: string) => {
    return parseInt(value.replace(/\./g, "")) || 0;
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setLocalMin(formatted);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setLocalMax(formatted);
  };

  const handleApply = () => {
    const min = parseNumber(localMin);
    const max = parseNumber(localMax);
    onPriceChange(min, max);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleApply();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Từ</label>
          <div className="relative">
            <input
              type="text"
              value={localMin}
              onChange={handleMinChange}
              onKeyDown={handleKeyDown}
              placeholder="0"
              className="w-full px-3 py-2 pr-8 border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-[#996515] transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              đ
            </span>
          </div>
        </div>
        <div className="pt-5">
          <span className="text-gray-400">-</span>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Đến</label>
          <div className="relative">
            <input
              type="text"
              value={localMax}
              onChange={handleMaxChange}
              onKeyDown={handleKeyDown}
              placeholder="10.000.000"
              className="w-full px-3 py-2 pr-8 border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-[#996515] transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              đ
            </span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleApply}
        className="w-full py-2 bg-gradient-to-r from-[#996515] to-[#D4AF37] text-white font-semibold rounded-lg hover:shadow-md transition-shadow btn-shine"
      >
        Áp dụng
      </button>
    </div>
  );
}
