import { cn } from "@/lib/cn";
import SearchIcon from "@assets/icons/search.svg";

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const SearchInput = ({
  placeholder,
  value,
  onChange,
  className,
}: SearchInputProps) => {
  return (
    <label
      className={cn(
        "flex items-center rounded-16pxr bg-ui-50 px-16pxr py-13pxr gap-8pxr cursor-text",
        className,
      )}>
      <SearchIcon className="w-24pxr h-24pxr shrink-0 text-ui-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-headline1-md text-ui-900 placeholder:text-ui-400 outline-none"
      />
    </label>
  );
};

export default SearchInput;
