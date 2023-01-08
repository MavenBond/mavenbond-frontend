import { DeliveryType, PlatformType } from "models/enums";
import { formatUnixTimeStamp } from "utils/time";

type Props = {
  id: number;
  title: string;
  subject: string;
  company: string;
  moneyMin: number;
  moneyMax: number;
  startDate: number;
  endDate: number;
  platform: PlatformType;
  type: DeliveryType;
};

export default function BrowseEventCard({
  title = "Canh sat danh dan 24/7 Tet Nguyen Dan!",
  subject = "If a dog chews shoes whose shoes does he choose?",
  moneyMin = 100,
  moneyMax = 200,
  startDate = 1672997687,
  endDate = 1673997687,
  company = "Sneaky Sasquatch",
  platform = PlatformType.FACEBOOK,
  type = DeliveryType.VIDEO,
}: Props) {
  return (
    <div className='card card-compact bg-white dark:bg-[#0d204c] shadow-lg dark:shadow-gray-600/40 border border-gray-200 dark:border-gray-800'>
      <div className='card-body'>
        <h2 className='card-title text-amber-500'>
          {title}
          <div className='badge badge-primary'>{platform}</div>
          <div className='badge badge-secondary'>{type}</div>
        </h2>

        {/* <div className='divider' /> */}
        <p>{`${subject}`}</p>
        <p>{`Company: ${company}`}</p>
        <p>{`${formatUnixTimeStamp(startDate)} - ${formatUnixTimeStamp(endDate)}`}</p>
        <div className='stat-value text-xl'>
          ${moneyMin} - ${moneyMax}
        </div>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary '>Send Offer</button>
        </div>
      </div>
    </div>
  );
}
