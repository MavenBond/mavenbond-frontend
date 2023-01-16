import { Event } from "models/event";
import { formatUnixTimeStamp } from "utils/time";

export interface Props {
  event: Event;
  onClick?: () => void;
}

export default function BrowseEventCard({ event, onClick = undefined }: Props) {
  return (
    <div className='card card-compact bg-white dark:bg-[#0d204c] shadow-lg dark:shadow-gray-600/40 border border-gray-200 dark:border-gray-800'>
      <div className='card-body'>
        <h2 className='card-title text-amber-500 line-clamp-1'>
          {event.title}
          <div className='badge badge-primary'>{event.platform}</div>
          <div className='badge badge-secondary'>{event.type}</div>
        </h2>

        {/* <div className='divider' /> */}
        <p className='line-clamp-1'>{`${event.description}`}</p>
        <p>
          <strong>Company: </strong>
          {`${event.businessName}`}
        </p>
        <p>{`${formatUnixTimeStamp(event.startDate)} - ${formatUnixTimeStamp(event.endDate)}`}</p>
        <div className='stat-value text-xl'>
          ${event.moneyMin} - ${event.moneyMax}
        </div>

        <div className='card-actions justify-end'>
          <button onClick={onClick} className='btn btn-primary'>
            Send Offer
          </button>
        </div>
      </div>
    </div>
  );
}
