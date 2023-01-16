import { Influencer } from "models/influencer";
import Image from "next/image";
import { FALLBACK_PROFILE_URL } from "projConstants";
import { SocialIcon } from "react-social-icons";
import { formatUnixTimeStamp } from "utils/time";

export interface Props {
  influencer: Influencer;
}

export default function BrowseinfluencerCard({ influencer }: Props) {
  return (
    <div className='card card-compact bg-white dark:bg-[#0d204c] shadow-lg dark:shadow-gray-600/40 border border-gray-200 dark:border-gray-800'>
      <div className='card-body'>
        <div className='flex justify-between'>
          <div>
            <h2 className='card-title text-amber-500'>{influencer.full_name}</h2>
            <p>
              <strong>Email: </strong>
              {`${influencer.email}`}
            </p>
            <p>
              <strong>Phone: </strong>
              {`${influencer.phone}`}
            </p>
          </div>

          <div className='avatar'>
            <div className='w-20'>
              <Image
                alt='Profile Image'
                src={influencer.avatar_url || FALLBACK_PROFILE_URL}
                className='rounded-full object-cover'
                fill
              />
            </div>
          </div>
        </div>

        {/* <div className='divider' /> */}

        <p>
          <strong>Country: </strong>
          {`${influencer.country}`}
        </p>
        <p>
          <strong>City: </strong>
          {`${influencer.city}`}
        </p>

        <div className='card-actions justify-between'>
          <div>
            <SocialIcon
              style={{
                width: "2.5rem",
                height: "2.5rem",
              }}
              url={`${influencer.facebook_url}`}
            />
            <SocialIcon
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginLeft: "0.5rem",
              }}
              url={`${influencer.tiktok_url}`}
            />
            <SocialIcon
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginLeft: "0.5rem",
              }}
              url={`${influencer.youtube_url}`}
            />
            <SocialIcon
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginLeft: "0.5rem",
              }}
              url={`${influencer.instagram_url}`}
            />
          </div>

          <button className='btn btn-primary '>Invite</button>
        </div>
      </div>
    </div>
  );
}
