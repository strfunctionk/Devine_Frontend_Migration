import {
  TECH_BADGE_ICON,
  TECH_LABEL,
  type TechName,
} from "@/constants/techstack";
import CommonChip from "@/components/chips/CommonChip";

type TechStackOptionListProps = {
  title: string;
  techs: TechName[];
  selectedValues?: TechName[];
  onToggle?: (value: TechName) => void;
};

const TechStackOptionList = ({
  title,
  techs,
  selectedValues = [],
  onToggle,
}: TechStackOptionListProps) => {
  return (
    <div className="flex flex-col gap-12pxr">
      <span className="text-label1-md text-ui-700">{title}</span>
      <div className="flex flex-wrap gap-4pxr">
        {techs.map((tech) => (
          <CommonChip
            key={tech}
            label={TECH_LABEL[tech]}
            icon={TECH_BADGE_ICON[tech]}
            selected={selectedValues.includes(tech)}
            onClick={() => onToggle?.(tech)}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackOptionList;
