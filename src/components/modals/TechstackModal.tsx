"use client";

import { useState } from "react";
import type { TechName } from "@/constants/techstack";
import SearchInput from "@/components/inputs/SearchInput";
import FilterTechstackOptionList from "@/components/common/FilterTechstackOptionList";
import IconButton from "@/layouts/gnb/components/IconButton";
import CloseIcon from "@/assets/icons/menu-closed.svg";

type TechstackModalProps = {
  onClose?: () => void;
  onSave?: (selectedValues: TechName[]) => void;
};

const TechstackModal = ({ onClose, onSave }: TechstackModalProps) => {
  const [selectedValues, setSelectedValues] = useState<TechName[]>([]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="techstack-modal-title"
      className="w-600pxr h-730pxr flex flex-col justify-between bg-ui-bg rounded-24pxr p-32pxr">
      <div className="flex flex-col gap-16pxr">
        <div className="flex justify-between">
          <h2 id="techstack-modal-title" className="text-heading2-bd">보유 스택</h2>
          <IconButton
            icon={CloseIcon}
            onClick={onClose}
            iconClassName="w-20pxr h-20pxr"
            aria-label="닫기"
          />
        </div>
        <SearchInput
          placeholder="보유 스택을 검색해주세요"
          className="m-8pxr"
        />
        <FilterTechstackOptionList
          selectedValues={selectedValues}
          onChange={setSelectedValues}
        />
      </div>
      {/* 폰트 없음 */}
      <div className="flex text-title3-bd gap-16pxr">
        <button
          type="button"
          onClick={() => setSelectedValues([])}
          className="bg-ui-50 py-16pxr w-142pxr flex justify-center items-center rounded-16pxr">
          초기화
        </button>
        <button
          type="button"
          onClick={() => onSave?.(selectedValues)}
          className="flex justify-center items-center w-378pxr bg-primary text-white py-16pxr rounded-16pxr hover:bg-primary/80 transition-colors">
          저장
        </button>
      </div>
    </div>
  );
};

export default TechstackModal;
