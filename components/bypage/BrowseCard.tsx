type Props = {
  title: string;
  content: string;
};

export default function BrowseCard({
  title = "Shoes!",
  content = "If a dog chews shoes whose shoes does he choose?",
  startDate,
  endDate,
}: Props) {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{content}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Send Offer</button>
        </div>
      </div>
    </div>
  );
}
