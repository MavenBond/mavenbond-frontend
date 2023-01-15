import dynamic from "next/dynamic";
import { Event } from "models/event";

const BrowseEventCard = dynamic(() => import("./BrowseEventCard"));

type Props = {
  eventList: Event[];
};

export default function BrowseList({ eventList }: Props) {
  return (
    <div className='overflow-scroll grid grid-cols-1 lg:grid-cols-2 gap-6 pb-[5rem] px-5 bg-transparent'>
      {eventList.map((e) => {
        return (
          <div className='...'>
            <BrowseEventCard event={e} key={e.id} />
          </div>
        );
      })}
    </div>
  );
}
