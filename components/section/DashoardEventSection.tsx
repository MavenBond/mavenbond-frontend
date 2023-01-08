import dynamic from "next/dynamic";

const StatusCard = dynamic(() => import("components/common/StatusCard"))

const DashboardEventSection = () => {
  return (
    <div className="flex p-4 justify-between">
      <StatusCard text="Create" title="New Event" />
      <StatusCard text="99" title="Open" />
      <StatusCard text="06" title="In Progress" />
      <StatusCard text="06" title="Completed" />
    </div>
  )
}

export default DashboardEventSection;