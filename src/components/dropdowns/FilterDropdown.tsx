import { cn } from "@/lib/cn";
import FilterButton from "../buttons/FilterButton";
import FilterCheckBoxOptionList, {
  type FilterCheckBoxOption,
} from "../common/FilterCheckBoxOptionList";
import FilterTechstackOptionList from "../common/FilterTechstackOptionList";

type CheckboxDropdownProps = {
  type?: "checkbox";
  options: FilterCheckBoxOption[];
  selectedValues?: string[];
  onToggle?: (value: string) => void;
  onSelectAll?: () => void;
  columns?: 1 | 2;
  optionClassName?: string;
};

type TechstackDropdownProps = {
  type: "techstack";
};

type FilterDropdownProps = {
  title: string;
  onApply?: () => void;
  onReset?: () => void;
  onClose?: () => void;
  className?: string;
} & (CheckboxDropdownProps | TechstackDropdownProps);

const FilterDropdown = ({
  title,
  onApply,
  onReset,
  className,
  ...props
}: FilterDropdownProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-ui-50 border border-ui-200 rounded-12pxr shadow-dropdown pl-16pxr",
        className,
      )}>
      {/* 타이틀 부분 */}
      <span className="text-ui-600 text-label1-md pt-16pxr pb-8pxr">
        {title}
      </span>
      {/* 옵션 목록 */}
      {props.type === "techstack" ? (
        <FilterTechstackOptionList />
      ) : (
        <FilterCheckBoxOptionList
          options={props.options}
          selectedValues={props.selectedValues}
          onToggle={props.onToggle}
          onSelectAll={props.onSelectAll}
          columns={props.columns}
          className={props.optionClassName}
        />
      )}
      {/* 푸터 부분 */}
      <div className="flex justify-end gap-x-8pxr p-8pxr">
        <FilterButton
          label="초기화"
          onClick={onReset}
          className="bg-ui-50 text-ui-500 hover:bg-ui-100 transition-colors"
        />
        <FilterButton
          label="저장"
          onClick={onApply}
          className="bg-primary text-white hover:bg-primary/80 transition-colors"
        />
      </div>
    </div>
  );
};

export default FilterDropdown;
