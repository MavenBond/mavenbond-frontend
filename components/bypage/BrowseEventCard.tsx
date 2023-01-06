import { formatUnixTimeStamp } from "utils/time";

type Props = {
  id: number;
  title: string;
  content: string;
  company: string;
  country: string;
  city: string;
  moneyMin: number;
  moneyMax: number;
  startDate: number;
  endDate: number;
};

export default function BrowseEventCard({
  title = "Canh sat danh dan 24/7 Tet Nguyen Dan!",
  content = "If a dog chews shoes whose shoes does he choose?",
  moneyMin = 100,
  moneyMax = 200,
  startDate = 1672997687,
  endDate = 1673007687,
  company = "Sneaky Sasquatch",
  country = "Vietnam",
  city = "Ho Chi Minh",
}: Props) {
  return (
    <div className='card w-97 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>

        <div className='divider' />

        <p>{`Offered by: ${company}`}</p>
        <p>{`Location: ${country} - ${city}`}</p>
        <p>{`Objective: ${content}`}</p>
        <p>{`Offer range: $${moneyMin} - $${moneyMax}`}</p>
        <p>{`${formatUnixTimeStamp(startDate)} - ${formatUnixTimeStamp(endDate)}`}</p>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Send Offer</button>
        </div>
      </div>
    </div>
  );
}
