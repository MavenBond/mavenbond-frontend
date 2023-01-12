import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import { BUSINESS_STAT_CARDS, INFLUENCE_STAT_CARDS } from "projConstants";
import { useState } from "react";
import DashboardStyles from "styles/Dashboard.module.css";

const DashboardStatCardsRow = dynamic(() => import("components/bypage/DashboardStatCardsRow"));
const DashboardCard = dynamic(() => import("components/bypage/DashboardCard"));

const DashboardCardsColumn = () => {
  const { profile } = useAuth();
  const isBusiness = profile?.user_role === "business";
  const statsModel = isBusiness ? BUSINESS_STAT_CARDS : INFLUENCE_STAT_CARDS;
  const [currSectionTitle, setCurrSectionTitle] = useState<string>(statsModel[1].textContent);
  const [sectionFadedin, setSectionFadedIn] = useState<boolean>(false);

  return (
    <div className='flex flex-col flex-1 overflow-hidden select-none'>
      <DashboardStatCardsRow
        {...{
          statsModel,
          currSectionTitle,
          setCurrSectionTitle,
          sectionFadedin,
          setSectionFadedIn,
        }}
      />
      <div
        className={`
          ${sectionFadedin && "animate-fadeIn"} 
          flex flex-col justify-between basis-3/4
        `}
        onAnimationEnd={() => setSectionFadedIn(false)}
      >
        <div className={`${DashboardStyles.cardsSectionTitle}`}>{currSectionTitle}</div>
        <div id='cardsScrollContainer' className={DashboardStyles.cardsScrollContainer}>
          {/* DEV */}
          {[
            ...Array(
              statsModel.filter(({ textContent }) => textContent === currSectionTitle)[0]
                .numberContent
            ).keys(),
          ].map((item) => (
            <DashboardCard key={item}>
              <>{item + 1}</>
            </DashboardCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardsColumn;
