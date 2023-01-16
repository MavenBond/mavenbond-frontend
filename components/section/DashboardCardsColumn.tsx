import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Router from "next/router";
import { useState } from "react";
import DashboardStyles from "styles/Dashboard.module.css";
import {
  distributeDataToModel,
  OfferStatCards,
  ALL_OFFERS,
  INFLUENCE_STAT_MODEL,
  BUSINESS_STAT_CARDS,
} from "utils/dashboard";

const DashboardStatCardsRow = dynamic(() => import("components/bypage/DashboardStatCardsRow"));
const DashboardOfferCard = dynamic(() => import("components/variant/DashboardOfferCard"));
const Modal = dynamic(() => import("components/common/Modal"));

const DashboardCardsColumn = () => {
  // DEV
  const INFLUENCE_STAT_CARDS: OfferStatCards[] = distributeDataToModel(
    ALL_OFFERS,
    INFLUENCE_STAT_MODEL
  );

  const { profile } = useAuth();
  const isBusiness = profile?.user_role === "business";
  const statsModel = isBusiness ? BUSINESS_STAT_CARDS : INFLUENCE_STAT_CARDS;

  const [currSectionTitle, setCurrSectionTitle] = useState<string>(statsModel[1].textContent);
  const [sectionFadedin, setSectionFadedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const CURRENT_LIST = statsModel.filter(({ textContent }) => textContent === currSectionTitle)[0];

  return (
    <div className='flex flex-col flex-1 overflow-hidden select-none'>
      {/* small stat cards row */}
      <DashboardStatCardsRow
        {...{
          statsModel,
          isBusiness,
          handleInfluencerSpecial: () => Router.push("/browse"),
          handleBusinessSpecial: undefined,
          currSectionTitle,
          setCurrSectionTitle,
          sectionFadedin,
          setSectionFadedIn,
        }}
      />

      {/* card details modal */}
      <Modal
        {...{
          title: isBusiness ? "ADS DETAILS" : "OFFER DETAILS",
          isOpen,
          closeModal: () => setIsOpen(false),
        }}
      >
        Default Content
      </Modal>

      {/* main cards grid */}
      <div
        className={`
          ${sectionFadedin && "animate-fadeIn"} 
          flex flex-col justify-between basis-3/4
        `}
        onAnimationEnd={() => setSectionFadedIn(false)}
      >
        <div className={DashboardStyles.cardsSectionTitle}>{currSectionTitle}</div>
        <div id='cardsScrollContainer' className={DashboardStyles.cardsScrollContainer}>
          {CURRENT_LIST?.records?.map((data, idx) => {
            return (
              <DashboardOfferCard
                key={data.offerId} // DEV
                data={data}
                idx={idx}
                onClick={() => setIsOpen(true)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardsColumn;
