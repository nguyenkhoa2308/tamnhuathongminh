"use client";

import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";
import type { PriceRow } from "@/types/product";
import CustomSelect from "@/components/ui/CustomSelect";

interface Props {
  title?: string;
  data: PriceRow[];
}

type SortField = "thickness" | "price" | null;
type SortDirection = "asc" | "desc";

const pageSizeOptions = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
];

// Sort icon component - defined outside to avoid recreation on each render
function SortIcon({
  field,
  sortField,
  sortDirection,
}: {
  field: SortField;
  sortField: SortField;
  sortDirection: SortDirection;
}) {
  const isActive = sortField === field;
  return (
    <span className="inline-flex flex-col ml-2 -space-y-1">
      <ChevronUp
        size={16}
        strokeWidth={2.5}
        className={`${
          isActive && sortDirection === "asc" ? "text-primary" : "text-gray-300"
        }`}
      />
      <ChevronDown
        size={16}
        strokeWidth={2.5}
        className={`${
          isActive && sortDirection === "desc"
            ? "text-primary"
            : "text-gray-300"
        }`}
      />
    </span>
  );
}

export default function PriceTable({ title, data }: Props) {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter(
      (row) =>
        row.thickness.toLowerCase().includes(search.toLowerCase()) ||
        row.price_formatted.includes(search)
    );
  }, [data, search]);

  const sortedData = useMemo(() => {
    if (!sortField) return filteredData;

    return [...filteredData].sort((a, b) => {
      let comparison = 0;
      if (sortField === "thickness") {
        const aNum = parseFloat(a.thickness.replace(/[^\d.]/g, ""));
        const bNum = parseFloat(b.thickness.replace(/[^\d.]/g, ""));
        comparison = aNum - bNum;
      } else if (sortField === "price") {
        comparison = a.price - b.price;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filteredData, sortField, sortDirection]);

  const pageSizeNum = parseInt(pageSize);
  const totalPages = Math.ceil(sortedData.length / pageSizeNum);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSizeNum,
    currentPage * pageSizeNum
  );

  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-xl font-bold text-gray-900 mb-6">{title}</h2>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-stretch sm:items-center mb-4 gap-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Xem</span>
          <CustomSelect
            options={pageSizeOptions}
            value={pageSize}
            onChange={(val) => {
              setPageSize(val);
              setCurrentPage(1);
            }}
            minWidth="80px"
          />
          <span className="text-gray-600 text-sm">mục</span>
        </div>
        <div className="relative flex-1 sm:flex-initial">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Tìm kiếm..."
            className="w-full sm:w-48 pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-700
              focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(153,101,21,0.15)]
              transition-all duration-150"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Table - Desktop */}
      <div className="hidden sm:block border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-50">
            <tr>
              <th className="text-left px-4 py-4 font-semibold text-gray-700 whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => handleSort(null)}
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  STT
                  <SortIcon
                    field={null}
                    sortField={sortField}
                    sortDirection={sortDirection}
                  />
                </button>
              </th>
              <th className="text-left px-4 py-4 font-semibold text-gray-700 whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => handleSort("thickness")}
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  ĐỘ DÀY
                  <SortIcon
                    field="thickness"
                    sortField={sortField}
                    sortDirection={sortDirection}
                  />
                </button>
              </th>
              <th className="text-left px-4 py-4 font-semibold text-gray-700 whitespace-nowrap">
                <span className="inline-flex items-center">
                  ĐVT
                  <SortIcon
                    field={null}
                    sortField={sortField}
                    sortDirection={sortDirection}
                  />
                </span>
              </th>
              <th className="text-left px-4 py-4 font-semibold text-gray-700 whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => handleSort("price")}
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  ĐƠN GIÁ (M2)
                  <br />
                  (DƯỚI 50M2) VND
                  <SortIcon
                    field="price"
                    sortField={sortField}
                    sortDirection={sortDirection}
                  />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4 text-gray-600">
                  {(currentPage - 1) * pageSizeNum + i + 1}
                </td>
                <td className="px-4 py-4 text-gray-800 font-medium">
                  {row.thickness}
                </td>
                <td className="px-4 py-4 text-gray-600">Mét vuông</td>
                <td className="px-4 py-4 text-gray-800 font-medium">
                  {row.price_formatted}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards - Mobile */}
      <div className="sm:hidden space-y-3">
        {paginatedData.map((row, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-4 bg-white"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">
                #{(currentPage - 1) * pageSizeNum + i + 1}
              </span>
              <span className="text-lg font-bold text-primary">
                {row.price_formatted}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 uppercase">Độ dày</div>
                <div className="font-semibold text-gray-800">{row.thickness}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase">Đơn vị</div>
                <div className="text-gray-600">Mét vuông</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 gap-3">
        <div className="text-center sm:text-left">
          Đang xem {(currentPage - 1) * pageSizeNum + 1} - {Math.min(currentPage * pageSizeNum, sortedData.length)} / {sortedData.length}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1.5 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ‹ Trước
          </button>
          <span className="px-2 text-gray-400">|</span>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1.5 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Tiếp ›
          </button>
        </div>
      </div>
    </div>
  );
}
