import dynamic from "next/dynamic";

const BrowseEventCard = dynamic(() => import("./BrowseEventCard"));

export default function BrowseList() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  gap-6'>
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
