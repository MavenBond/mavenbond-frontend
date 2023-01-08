import dynamic from "next/dynamic";

const UserPreviewCard = dynamic(() => import("components/common/UserPreviewCard"))

const DashboardUserSection = () => {
  return (
    <div className="flex mt-40 ml-40 justify-between">
      <UserPreviewCard name="Cong Minh" city="Ho Chi Minh" country="Vietnam" isFavorite={false} />
    </div>
  )
}

export default DashboardUserSection;