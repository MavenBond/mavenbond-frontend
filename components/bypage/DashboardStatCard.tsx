import { PlusIcon } from "@heroicons/react/24/solid";
import DashboardStyles from "styles/Dashboard.module.css";

type Props = {
  numberContent: number;
  textContent: string;
  className?: string;
  isSpecial?: boolean;
  idx: number;
  onClick?: () => void;
  onAnimationEnd?: () => void;
};

const DashboardStatCard = ({
  numberContent = 0,
  textContent = "Stat Card",
  className = "",
  isSpecial = false,
  idx = 0,
  onClick = undefined,
  onAnimationEnd = undefined,
}: Props) => {
  const displayNumber = numberContent <= 9 ? `0${numberContent}` : `${numberContent}`;
  const STAT_CARD_COLORS = [
    "text-gray-600",
    "text-violet-500",
    "text-amber-500",
    "text-orange-500",
    "text-pink-500",

    "text-gray-600",
    "text-violet-500",
    "text-amber-500",
    "text-orange-500",
    "text-pink-500",
  ];
  return (
    <div
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
      className={`
        dark:shadow-white/40
        ${DashboardStyles.cardContainer}
        ${isSpecial && "border-violet-500 border-[4px] border-dashed"}
        ${className}`}
    >
      <div className='flex flex-col justify-between w-full h-full'>
        <div className='font-semibold text-[2.8rem]'>
          {isSpecial ? (
            <PlusIcon className='w-10 h-10 mt-3 font-bold text-violet-600' />
          ) : (
            <span className={`${STAT_CARD_COLORS[idx]}`}>{displayNumber}</span>
          )}
        </div>
        <p className='font-semibold text-[0.95rem] text-gray-500'>{textContent}</p>
      </div>
    </div>
  );
};

export default DashboardStatCard;
