import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Router from "next/router";
import { useEffect, useState } from "react";
import DashboardStyles from "styles/Dashboard.module.css";
import useSWR from "swr";
import {
  ALL_OFFERS,
  BUSINESS_STAT_MODEL,
  distributeDataToModel,
  EventInfo,
  EventStatCards,
  INFLUENCE_STAT_MODEL,
  OfferInfo,
  OfferStatCards,
} from "utils/dashboard";

const DashboardStatCardsRow = dynamic(() => import("components/bypage/DashboardStatCardsRow"));
const DashboardEventCard = dynamic(() => import("components/variant/DashboardEventCard"));
const DashboardOfferCard = dynamic(() => import("components/variant/DashboardOfferCard"));
const Modal = dynamic(() => import("components/common/Drawer"));

const DashboardCardsColumn = () => {
  const [targetCards, setTargetCards] = useState<(OfferStatCards | EventStatCards)[] | undefined>(
    undefined
  );
  const { profile } = useAuth();
  const isBusiness = profile?.user_role === "business";
  const [currSectionTitle, setCurrSectionTitle] = useState<string | undefined>(
    targetCards ? targetCards[1].textContent : isBusiness ? "Opening Events" : "Opening Offers"
  );
  const [sectionFadedin, setSectionFadedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const CURRENT_LIST = targetCards?.filter(
    ({ textContent }) => textContent === currSectionTitle
  )[0];

  // data
  const { data: allEventsData } = useSWR("http://localhost:8090/api/v1/events/?pageSize=100");
  useEffect(() => {
    // DEV
    const BUSINESS_STAT_CARDS: (OfferStatCards | EventStatCards)[] | undefined =
      distributeDataToModel(allEventsData?.content, BUSINESS_STAT_MODEL);

    // DEV
    const INFLUENCE_STAT_CARDS: (OfferStatCards | EventStatCards)[] | undefined =
      distributeDataToModel(ALL_OFFERS, INFLUENCE_STAT_MODEL);

    console.log(allEventsData?.content);
    setTargetCards(isBusiness ? BUSINESS_STAT_CARDS : INFLUENCE_STAT_CARDS);
  }, [allEventsData]);

  return (
    <div className='flex flex-col flex-1 overflow-hidden select-none'>
      {/* small stat cards row */}
      <DashboardStatCardsRow
        {...{
          statsModel: targetCards,
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
            return isBusiness ? (
              <DashboardEventCard
                key={JSON.stringify(data as EventInfo)}
                data={data as EventInfo}
                idx={idx}
                onClick={() => setIsOpen(true)}
              />
            ) : (
              <DashboardOfferCard
                key={JSON.stringify(data as OfferInfo)}
                data={data as OfferInfo}
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
