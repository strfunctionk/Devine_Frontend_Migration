import { cn } from "@/lib/cn";
import FilterCheckBoxButton from "../buttons/FilterCheckBoxButton";

type FilterCheckBoxOption = {
  label: string;
  value: string;
};

type FilterCheckBoxOptionListProps = {
  options: FilterCheckBoxOption[];
  selectedValues?: string[];
  onToggle?: (value: string) => void;
  onSelectAll?: () => void;
  columns?: 1 | 2;
  className?: string;
};

const FilterCheckBoxOptionList = ({
  options,
  selectedValues = [],
  onToggle,
  onSelectAll,
  columns = 1,
  className,
}: FilterCheckBoxOptionListProps) => {
  const isAllSelected =
    options.length > 0 && selectedValues.length === options.length;
  return (
    <div
      className={cn(
        "grid py-8pxr",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-2": columns === 2,
        },
        className,
      )}>
      <div className="flex gap-x-12pxr items-center py-8pxr">
        <FilterCheckBoxButton checked={isAllSelected} onChange={onSelectAll} />
        <span className="text-label1-md text-ui-900">전체</span>
      </div>
      {options.map((option) => (
        <div
          key={option.value}
          className="flex gap-x-12pxr items-center py-8pxr">
          <FilterCheckBoxButton
            checked={selectedValues.includes(option.value)}
            onChange={() => onToggle?.(option.value)}
          />
          <span className="text-label1-md text-ui-900">{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckBoxOptionList;
export type { FilterCheckBoxOption, FilterCheckBoxOptionListProps };
