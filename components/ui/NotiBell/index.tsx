import { BellIcon } from "@heroicons/react/24/outline";

type NotiBellProps = {
  hasNoti?: boolean;
  textClass?: string;
};

const NotiBell = ({ hasNoti = false, textClass = "" }: NotiBellProps) => {
  return (
    <div className="relative cursor-pointer">
      <BellIcon className={`h-8 w-8 mt-1 ${textClass}`} />
      {hasNoti && (
        <>
          <span
            className="absolute top-[6px] right-[4px] inline-flex rounded-full 
              animate-ping h-[12px] w-[12px] bg-[rgba(124,58,237,0.75)]"
          />
          <span
            className="absolute top-[6px] right-[4px] inline-flex rounded-full 
              h-3 w-3 bg-[rgba(124,58,237,1)]"
          />
        </>
      )}
    </div>
  );
};

export default NotiBell;
