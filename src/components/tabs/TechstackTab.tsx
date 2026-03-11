import { cn } from "@/lib/cn";

type TechstackTabProps = {
  tabs: string[];
  activeIndex?: number;
  onChange?: (index: number) => void;
};

const TAB_WIDTH = 80;
const TAB_GAP = 16;

// TODO : 하단 바 2pxr이 더 자연스러워 보이는데, 디자인 협의 필요
const TechstackTab = ({
  tabs,
  activeIndex = 0,
  onChange,
}: TechstackTabProps) => {
  return (
    <div
      role="tablist"
      className="relative pb-4pxr flex gap-16pxr text-body1-sb w-fit"
      style={
        {
          "--bar-offset": `${activeIndex * (TAB_WIDTH + TAB_GAP)}px`,
        } as React.CSSProperties
      }>
      {tabs.map((tab, i) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          onClick={() => onChange?.(i)}
          className={cn("w-80pxr text-center text-ui-400 transition-colors", {
            "text-ui-700": i === activeIndex,
          })}>
          {tab}
        </button>
      ))}
      {/* 전체 보더 */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-1pxr rounded-full bg-ui-100" />
      {/* 움직이는 바 */}
      <div aria-hidden className="absolute bottom-0 h-1pxr rounded-full bg-ui-300 w-80pxr transition-all duration-300 left-(--bar-offset)" />
    </div>
  );
};

export default TechstackTab;
