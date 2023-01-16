import dynamic from "next/dynamic";
import { SocialIcon } from "react-social-icons";
import DashboardStyles from "styles/Dashboard.module.css";
import { EventInfo } from "utils/dashboard";
import { formatted } from "utils/time";

const DashboardCard = dynamic(() => import("components/bypage/DashboardCard"));
type Props = { data: EventInfo; idx: number; onClick?: () => void };

const DashboardEventCard = ({ data, idx, onClick = undefined }: Props) => {
  const { id, title, platform, moneyMin, moneyMax, status, businessName, startDate, endDate } =
    data;

  return (
    <DashboardCard>
      <span
        className='scale-[0.8] 
        absolute top-[0.9rem] 
        right-[1.5rem] bg-pink-500 
      text-white self-end px-4 py-1 
        rounded-2xl mb-2'
      >
        {status}
      </span>
      <div
        style={{ position: "absolute", flexShrink: 0, bottom: "1.75rem", left: "2rem" }}
        className='tooltip'
        data-tip='Event Platform'
      >
        <SocialIcon
          style={{
            width: "2.5rem",
            height: "2.5rem",
          }}
          url={`https://${platform?.toLowerCase()}.com/`}
        />
      </div>
      <p
        className='text-gray-400 text-[0.9rem] w-full 
        flex justify-between items-center'
      >
        {businessName}
      </p>
      <p className={`${DashboardStyles.dashboardCardTitle}`}>
        {idx + 1}. {title}
      </p>
      <div className='divider m-0' />
      <div className='flex flex-col flex-1'>
        <div
          className={`flex flex-col gap-3 py-2 flex-1 
          ${DashboardStyles.dashboardCardItems}`}
        >
          <p>
            <strong>Event ID:</strong> {id}
          </p>
          <p className='line-clamp-1'>
            <strong>Start Date:</strong> {formatted(startDate as number)}
          </p>
          <p className='line-clamp-1'>
            <strong>End Date:</strong> {formatted(endDate as number)}
          </p>
          <p>
            <strong>Prices Range:</strong> {moneyMin} USD - {moneyMax} USD
          </p>
        </div>

        <div className='self-end'>
          <button onClick={onClick} className='btn btn-outline btn-primary rounded-[2rem]'>
            VIEW MORE
          </button>
        </div>
      </div>
    </DashboardCard>
  );
};

export default DashboardEventCard;
