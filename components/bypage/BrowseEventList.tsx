import BrowseEventCard from "./BrowseEventCard";

export default function BrowseList() {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='...'>
        <BrowseEventCard />
      </div>
      <div className='...'>
        <BrowseEventCard />
      </div>
      <div className='...'>
        <BrowseEventCard />
      </div>
      <div className='...'>
        <BrowseEventCard />
      </div>
      <div className='...'>
        <BrowseEventCard />
      </div>
      <div className='...'>
        <BrowseEventCard />
      </div>
    </div>
  );
}
