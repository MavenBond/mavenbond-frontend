import dynamic from "next/dynamic";
import DashboardStyles from "styles/Dashboard.module.css";

const DashboardCalendar = dynamic(() => import("components/bypage/DashboardCalendar"));

const DashboardScheduleColumn = () => {
  return (
    <div className={DashboardStyles.scheduleCol}>
      <h2 className='pl-10 pt-6 font-bold text-[2rem]'>Ads Schedule</h2>
      <DashboardCalendar />
    </div>
  );
};

export default DashboardScheduleColumn;
