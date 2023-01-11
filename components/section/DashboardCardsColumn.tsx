import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import { BUSINESS_STAT_CARDS, INFLUENCE_STAT_CARDS } from "projConstants";
import DashboardStyles from "styles/Dashboard.module.css";

const DashboardStatCard = dynamic(() => import("components/bypage/DashboardStatCard"));

const DashboardCardsColumn = () => {
  const { profile } = useAuth();
  const isBusiness = profile?.user_role === "business";
  const statsModel = isBusiness ? BUSINESS_STAT_CARDS : INFLUENCE_STAT_CARDS;
  return (
    <div className='flex flex-col flex-1 overflow-y-scroll'>
      <div className={DashboardStyles.statCardsRow}>
        {statsModel.map(({ numberContent, textContent, isSpecial }, idx) => (
          <DashboardStatCard
            key={textContent}
            {...{ numberContent, textContent, isSpecial, idx }}
          />
        ))}
      </div>
      <div className='basis-3/4'></div>
    </div>
  );
};

export default DashboardCardsColumn;
