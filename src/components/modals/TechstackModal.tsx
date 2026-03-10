import SearchInput from "@/components/inputs/SearchInput";
import FilterTechstackOptionList from "@/components/common/FilterTechstackOptionList";
import IconButton from "@/layouts/gnb/components/IconButton";
import CloseIcon from "@/assets/icons/menu-closed.svg";

const TechstackModal = () => {
  return (
    <div className="w-600pxr h-730pxr flex flex-col justify-between bg-ui-bg rounded-24pxr p-32pxr">
      <div className="flex flex-col gap-16pxr">
        <div className="flex justify-between">
          <span className="text-heading2-bd">보유 스택</span>
          <IconButton
            icon={CloseIcon}
            onClick={() => {}}
            iconClassName="w-20pxr h-20pxr"
          />
        </div>
        <SearchInput
          placeholder="보유 스택을 검색해주세요"
          className="m-8pxr"
        />
        <FilterTechstackOptionList />
      </div>
      {/* 폰트 없음 */}
      <div className="flex text-title3-bd gap-16pxr">
        <button className="bg-ui-50 py-16pxr w-142pxr flex justify-center items-center rounded-16pxr">
          초기화
        </button>
        <button className="flex justify-center items-center w-378pxr bg-primary text-white py-16pxr rounded-16pxr hover:bg-primary/80 transition-colors">
          저장
        </button>
      </div>
    </div>
  );
};

export default TechstackModal;
