import dynamic from "next/dynamic";
import { Event } from "models/event";
import { useState } from "react";

const BrowseEventCard = dynamic(() => import("./BrowseEventCard"));
const SendOfferForm = dynamic(() => import("components/bypage/SendOfferForm"));
const Drawer = dynamic(() => import("components/common/Drawer"));

type Props = {
  eventList: Event[];
};

export default function BrowseEventList({ eventList }: Props) {
  const [isNewOfferOpen, setIsNewOfferOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chosenEvent, setChosenEvent] = useState<any>({});
  return (
    <div className='overflow-scroll grid grid-cols-1 lg:grid-cols-2 gap-6 pb-[5rem] px-5 bg-transparent'>
      {/* send offer drawer */}
      <Drawer
        {...{
          title: "SEND OFFER",
          isOpen: isNewOfferOpen,
          closeModal: () => setIsNewOfferOpen(false),
        }}
      >
        <SendOfferForm eventData={chosenEvent} />
      </Drawer>

      {eventList.map((e) => {
        return (
          <div className='...' key={e.id}>
            <BrowseEventCard
              event={e}
              onClick={() => {
                setIsNewOfferOpen(true);
                setChosenEvent(e);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
