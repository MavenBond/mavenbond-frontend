import { PlusIcon } from "@heroicons/react/24/solid";
import DashboardStyles from "styles/Dashboard.module.css";

type Props = {
  numberContent: number;
  textContent: string;
  isSpecial?: boolean;
  idx: number;
};

const DashboardStatCard = ({
  numberContent = 0,
  textContent = "Stat Card",
  isSpecial = false,
  idx = 0,
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
      className={`
        ${DashboardStyles.cardContainer}
        ${isSpecial && "border-violet-500 border-[4px] border-dashed"}`}
    >
      <div className='flex flex-col justify-between h-full w-full'>
        <div className='font-semibold text-[2.8rem]'>
          {isSpecial ? (
            <PlusIcon className='h-10 w-10 mt-3 font-bold text-violet-600' />
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
