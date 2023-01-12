import type { Dispatch } from "react";
import dynamic from "next/dynamic";
import DashboardStyles from "styles/Dashboard.module.css";

const DashboardStatCard = dynamic(() => import("components/bypage/DashboardStatCard"));
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  statsModel: Record<string, any>[];
  sectionFadedin?: boolean;
  currSectionTitle?: string;
  setSectionFadedIn?: Dispatch<boolean>;
  setCurrSectionTitle?: Dispatch<string>;
};

const DashboardStatCardsRow = ({
  statsModel = [],
  sectionFadedin = false,
  currSectionTitle = "",
  setSectionFadedIn = undefined,
  setCurrSectionTitle = undefined,
}: Props) => {
  return (
    <div className={`overflow-x-scroll ${DashboardStyles.statCardsRow}`}>
      {statsModel.map(({ numberContent, textContent, isSpecial }, idx) => (
        <DashboardStatCard
          className={`${sectionFadedin && "select-none"} `}
          onClick={() => {
            if (textContent !== currSectionTitle && !sectionFadedin) {
              setSectionFadedIn && setSectionFadedIn(true);
              setCurrSectionTitle && setCurrSectionTitle(textContent as string);

              // scroll container to top when changing content
              const containerElement = document.getElementById("cardsScrollContainer");
              if (containerElement) containerElement.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          key={textContent}
          {...{
            numberContent,
            textContent,
            isSpecial,
            idx,
          }}
        />
      ))}
    </div>
  );
};

export default DashboardStatCardsRow;
