import { useAuth } from "context/useAuth";
import dynamic from "next/dynamic";
import Router from "next/router";
import { useEffect, useState } from "react";
import DashboardStyles from "styles/Dashboard.module.css";
import useSWR from "swr";
import {
  BUSINESS_STAT_MODEL,
  distributeDataToModel,
  EventInfo,
  EventStatCards,
  INFLUENCE_STAT_MODEL,
  OfferInfo,
  OfferStatCards,
} from "utils/dashboard";

const DashboardStatCardsRow = dynamic(() => import("components/bypage/DashboardStatCardsRow"));
const CreateNewAdForm = dynamic(() => import("components/bypage/CreateNewAdForm"));
const DashboardEventCard = dynamic(() => import("components/variant/DashboardEventCard"));
const DashboardOfferCard = dynamic(() => import("components/variant/DashboardOfferCard"));
const Drawer = dynamic(() => import("components/common/Drawer"));
const Skeleton = dynamic(() => import("components/common/Skeleton"));

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
  const [isNewAdOpen, setIsNewAdOpen] = useState<boolean>(false);
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  const CURRENT_LIST = targetCards?.filter(
    ({ textContent }) => textContent === currSectionTitle
  )[0];

  useEffect(() => {
    if (!profile?.user_role && profile?.user_role === "") {
      window.location.reload();
      return;
    }

    setIsLoadingPage(false);
  }, [profile?.user_role]);

  // data
  const { data: allEventsData } = useSWR(`http://184.73.229.188:8090/api/v1/events/?pageSize=100`);
  const { data: allOffersData } = useSWR(`http://184.73.229.188:8090/api/v1/offers/?pageSize=100`);

  useEffect(() => {
    const BUSINESS_STAT_CARDS: (OfferStatCards | EventStatCards)[] | undefined =
      distributeDataToModel(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        allEventsData?.content?.filter((item: any) => item.businessId === profile?.id),
        BUSINESS_STAT_MODEL
      );

    const INFLUENCE_STAT_CARDS: (OfferStatCards | EventStatCards)[] | undefined =
      distributeDataToModel(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        allOffersData?.content?.filter((item: any) => item.influencerId === profile?.id),
        INFLUENCE_STAT_MODEL
      );

    setTargetCards(isBusiness ? BUSINESS_STAT_CARDS : INFLUENCE_STAT_CARDS);
  }, [allEventsData]);

  return (
    <div className='flex flex-col flex-1 overflow-hidden select-none'>
      {isLoadingPage && <Skeleton num={4} />}
      {!isLoadingPage && (
        <>
          {/* small stat cards row */}
          <DashboardStatCardsRow
            {...{
              statsModel: targetCards,
              isBusiness,
              handleInfluencerSpecial: () => Router.push("/browse"),
              handleBusinessSpecial: () => setIsNewAdOpen(true),
              currSectionTitle,
              setCurrSectionTitle,
              sectionFadedin,
              setSectionFadedIn,
            }}
          />

          {/* new ad drawer */}
          <Drawer
            {...{
              title: "CREATE NEW EVENT AD",
              isOpen: isNewAdOpen,
              closeModal: () => setIsNewAdOpen(false),
            }}
          >
            <CreateNewAdForm />
          </Drawer>

          {/* card details drawer */}
          <Drawer
            {...{
              title: isBusiness ? "ADS DETAILS" : "OFFER DETAILS",
              isOpen,
              closeModal: () => setIsOpen(false),
            }}
          >
            Default Content
          </Drawer>

          {/* main cards grid */}
          <div
            className={`
          ${sectionFadedin && "animate-fadeIn"} 
          flex flex-col justify-between basis-3/4
        `}
            onAnimationEnd={() => setSectionFadedIn(false)}
          >
            <div className={DashboardStyles.cardsSectionTitle}>{currSectionTitle}</div>
            {!CURRENT_LIST?.records ||
              (CURRENT_LIST?.records?.length <= 0 && (
                <div className='w-full flex justify-center py-10 italic'>Currently no records</div>
              ))}
            <div id='cardsScrollContainer' className={DashboardStyles.cardsScrollContainer}>
              {CURRENT_LIST?.records &&
                CURRENT_LIST?.records?.length > 0 &&
                CURRENT_LIST?.records?.map((data, idx) => {
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
        </>
      )}
    </div>
  );
};

export default DashboardCardsColumn;
