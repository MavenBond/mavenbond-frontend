import dynamic from "next/dynamic";
import { Influencer } from "models/influencer";

const BrowseInfluencerCard = dynamic(() => import("./BrowseInfluencerCard"));

type Props = {
  influencerList: Influencer[];
};

export default function BrowseInfluencerList({ influencerList }: Props) {
  return (
    <div className='overflow-scroll grid grid-cols-2 lg:grid-cols-3 gap-6 pb-[5rem] px-5 bg-transparent'>
      {influencerList.map((i) => {
        return (
          <div className='...' key={i.id}>
            <BrowseInfluencerCard influencer={i} />
          </div>
        );
      })}
    </div>
  );
}
