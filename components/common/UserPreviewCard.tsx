import { HeartIcon as HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFill } from "@heroicons/react/24/solid";
import { useState } from "react";

const UserPreviewCard = ({
  name = "", city = "", country = "", isFavorite = false, tiktokURL = "", youtubeURL = "", facebookURL = "", instagramURL = "" }) => {
  const [fav, setFav] = useState(isFavorite);
  const likeCustomer = () => {
    setFav(!fav);
    // update favorite 
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-3">
      <div className="flex-row flex justify-between">
        <img className="w-20 h-20 rounded-full shadow-lg object-cover" src="https://i.ex-cdn.com/mgn.vn/files/news/2022/10/26/spy-x-family-nhung-dac-diem-khien-ai-cung-muon-tro-thanh-ban-cua-anya-forger-143550.jpg" alt="avatar" />

        <div className="flex-col w-full px-4 pt-2">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
          <div className="text-sm text-gray-500 dark:text-gray-400">{city}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{country}</div>
        </div>

        <button className="self-start mt-3" onClick={likeCustomer}>
          {!fav && <HeartIcon className="w-7 h-7 text-red-500" />}
          {fav && <HeartIconFill className="w-7 h-7 text-red-500" />}
        </button>
      </div>
      <div>

      </div>
    </div >
  )
}

export default UserPreviewCard;