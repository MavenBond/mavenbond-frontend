import dynamic from "next/dynamic";

const UserPreviewCard = dynamic(() => import("components/common/UserPreviewCard"))

const DashboardUserSection = () => {
  return (
    <div className="flex p-4">
      <UserPreviewCard name="Cong Minh" city="Ho Chi Minh" country="Vietnam" isFavorite={false} />
    </div>
  )
}

export default DashboardUserSection;