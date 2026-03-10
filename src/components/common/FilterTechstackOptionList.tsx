"use client";

import { useState } from "react";
import type { TechName } from "@/constants/techstack";
import TechStackOptionList from "@/components/common/TechStackOptionList";
import SelectAllButton from "../buttons/SelectAllButton";
import TechstackTab from "../tabs/TechstackTab";

const TAB_TECHS: Record<number, { title: string; techs: TechName[] }[]> = {
  0: [
    {
      title: "언어/프레임워크",
      techs: ["JAVASCRIPT", "TYPESCRIPT", "REACT", "VUEJS", "NEXTJS", "SVELTE"],
    },
    {
      title: "모바일",
      techs: ["REACT_NATIVE", "FLUTTER", "KOTLIN", "SWIFT"],
    },
  ],
  1: [
    {
      title: "언어",
      techs: ["JAVA", "PYTHON", "GO", "C", "KOTLIN", "PHP"],
    },
    {
      title: "프레임워크",
      techs: ["SPRINGBOOT", "NODEJS", "EXPRESS", "NESTJS", "DJANGO"],
    },
    {
      title: "데이터베이스",
      techs: ["MONGODB", "MYSQL"],
    },
  ],
  2: [
    {
      title: "클라우드",
      techs: ["AWS", "FIREBASE"],
    },
    {
      title: "컨테이너",
      techs: ["DOCKER", "KUBERNETES"],
    },
  ],
};

const FilterTechstackOptionList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedValues, setSelectedValues] = useState<TechName[]>([]);

  const currentSections = TAB_TECHS[activeTab];
  const allTechs = currentSections.flatMap((s) => s.techs);
  const isAllSelected = allTechs.every((t) => selectedValues.includes(t));

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedValues((prev) => prev.filter((t) => !allTechs.includes(t)));
    } else {
      setSelectedValues((prev) => [
        ...prev.filter((t) => !allTechs.includes(t)),
        ...allTechs,
      ]);
    }
  };

  const handleToggle = (tech: TechName) => {
    setSelectedValues((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  return (
    <div className="flex flex-col">
      <TechstackTab
        tabs={["프론트엔드", "벡엔드", "인프라"]}
        activeIndex={activeTab}
        onChange={setActiveTab}
      />
      <div className="flex justify-end items-center mt-13pxr">
        <SelectAllButton selected={isAllSelected} onClick={handleSelectAll} />
      </div>
      {/* 옵션 리스트 */}
      <div className="flex flex-col gap-16pxr mt-8pxr">
        {currentSections.map((section) => (
          <TechStackOptionList
            key={section.title}
            title={section.title}
            techs={section.techs}
            selectedValues={selectedValues}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterTechstackOptionList;
