import { cn } from "@/lib/cn";
import FilterCheckBoxButton from "../buttons/FilterCheckBoxButton";
import FilterButton from "../buttons/FilterButton";

type FilterOption = {
  label: string;
  value: string;
};

type FilterDropdownProps = {
  title: string;
  options: FilterOption[];
  selectedValues?: string[];
  onToggle?: (value: string) => void;
  columns?: 1 | 2; // 추가 확장 시 숫자 늘리기
  className?: string;
  optionClassName?: string;
};

const FilterDropdown = ({
  title,
  options,
  selectedValues = [],
  onToggle,
  columns = 1,
  className,
}: FilterDropdownProps) => {
  // TODO : box shadow
  return (
    <div
      className={cn(
        "flex flex-col bg-ui-50 border-ui-100 rounded-12pxr",
        className,
      )}>
      {/* 타이틀 부분 */}
      <span className="text-ui-600 text-label1-md pl-16pxr pt-16pxr pb-8pxr">
        {title}
      </span>
      {/* 옵션 목록 */}
      <div
        className={cn("grid py-8pxr", {
          "grid-cols-1": columns === 1,
          "grid-cols-2": columns === 2,
        })}>
        {options.map((option) => (
          <div
            key={option.value}
            className={cn("flex gap-x-12pxr items-center px-16pxr py-8pxr")}>
            <FilterCheckBoxButton
              checked={selectedValues.includes(option.value)}
              onChange={() => onToggle?.(option.value)}
            />
            <span className="text-label1-md text-ui-900">{option.label}</span>
          </div>
        ))}
      </div>
      {/* 푸터 부분 */}
      <div className="flex justify-end gap-x-8pxr p-8pxr">
        <FilterButton
          label="초기화"
          className="bg-ui-50 text-ui-500 hover:bg-ui-100 transition-colors"
        />
        <FilterButton
          label="저장"
          className="bg-primary text-white hover:bg-primary/80 transition-colors"
        />
      </div>
    </div>
  );
};

export default FilterDropdown;
